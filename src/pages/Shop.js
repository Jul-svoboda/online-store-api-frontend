import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ItemList from '../components/ItemList'
import { observer } from 'mobx-react-lite'
import { fetchTypes, fetchBrands, fetchItems, } from "../http/itemsApi";
import { Context } from "../index";
import Pages from '../components/Pages'

const Shop = observer( () => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
    }, [item])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 2).then(data => { 
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item, item.page, item.selectedType.id, item.selectedBrand.id, ])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ItemList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop