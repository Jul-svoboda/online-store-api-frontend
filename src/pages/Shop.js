import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ItemList from '../components/ItemList'

const Shop = () => {
  return (
    <Container>
        <Row className='mt-3'>
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandBar/>
                <ItemList/>
            </Col>
        </Row>
    </Container>
  )
}

export default Shop