import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Card, Button } from 'react-bootstrap'
import { CiStar } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { fetchOneItem } from '../http/itemsApi';

const ItemPage = () => {
    const [item, setItem] = useState({info: []})
    const {id} = useParams()
    console.log({id})
    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
    })

    return (
        <Container >
            <div className='mt-5 d-flex flex-row'>
                <Col md={4} className='d-flex flex-column align-items-center'>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + item.img}/>
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h2>{item.name}</h2>
                        <div className='d-flex flex-row mt-5 align-items-center justify-content-center'>
                            <span style={{fontSize: 24}} className='mt-4'>{item.rating}</span>
                            <CiStar size={170} style={{position: 'absolute', top: 154}}/>
                        </div>
                    </div>
                </Col>
                <Col md={4} className='d-flex flex-column align-items-center'>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>from: {item.price}$</h3>
                        <Button variant='outline-dark'> Add to Cart </Button>
                    </Card>
                </Col>
            </div>
            <div className='d-flex flex-column mt-5'>
                <h2 className='p-2'>Specifications</h2>
                {item.info.map((info, index) => 
                    <div key={info.id} className='p-3' style={{background: index % 2 === 0 ? 'lightgray' : 'transpare'}}>
                        {info.title} : {info.description}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default ItemPage