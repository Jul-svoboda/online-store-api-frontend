import React from 'react'
import { Col, Container, Image, Card, Button } from 'react-bootstrap'
import { CiStar } from "react-icons/ci";

const ItemPage = () => {
    const description = [
        { id: 1, title: 'Color', description: 'Red, White, Black' },
        { id: 2, title: 'Material', description: 'Wood, Metal, Fabric' },
        { id: 3, title: 'Dimensions', description: '120 x 60 x 75 cm' },
        { id: 4, title: 'Weight', description: '12 kg' },
        { id: 5, title: 'Manufacturer', description: 'IKEA' },
        { id: 6, title: 'Warranty', description: '2 years' }
    ];
    const item = {id: 1, name: 'divanIkea', price: 2500, rating: 4, img: `/img/5568f3a2-4304-4490-a7d5-fb027abd7541.jpg`}
    return (
        <Container >
            <div className='mt-5 d-flex flex-row'>
                <Col md={4} className='d-flex flex-column align-items-center'>
                    <Image width={300} height={300} src={item.img}/>
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
                {description.map((info, index) => 
                    <div key={info.id} className='p-3' style={{background: index % 2 === 0 ? 'lightgray' : 'transpare'}}>
                        {info.title} : {info.description}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default ItemPage