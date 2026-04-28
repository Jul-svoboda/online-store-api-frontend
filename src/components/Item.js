import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../utils/consts';

const Item = ({item}) => {
    const navigate = useNavigate()
  return (
    <Col md={3}>
        <Card className='mt-3' style={{width: 150, cursor: 'pointer'}} border='light'>
            <Image onClick={() => navigate(ITEM_ROUTE + '/' + item.id)} width={150} height={150} src={item.img} />
            <div className='text-black-50 mt-1 d-flex flex-row justify-content-between align-items-center'>
                <div> Stol... </div>
                <div>
                    <div className='d-flex align-items-center'>
                        {item.rating}
                        <CiStar className='ms-1'/>
                    </div>
                </div>
            </div>
            <div> {item.name} </div>
        </Card>
    </Col>
  )
}

export default Item