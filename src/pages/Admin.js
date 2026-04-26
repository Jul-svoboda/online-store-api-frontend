import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateItem from '../components/modals/CreateItem'
import CreateBrand from '../components/modals/CreateBrand'

const Admin = () => {
    const [brandVisitable, setBrandVisitable] = useState(false)
    const [typeVisitable, setTypeVisitable] = useState(false)
    const [itemVisitable, setItemVisitable] = useState(false)

    return (
        <Container style={{width: '100%'}} className='d-flex flex-column mt-5'>
            <Button 
            onClick={() => setTypeVisitable(true)} 
            variant='outline-dark' 
            className='mt-3 p-3'
        >
                Add Type
            </Button>
            <Button 
                onClick={() => setBrandVisitable(true)} 
                variant='outline-dark' 
                className='mt-3 p-3'
            > 
                Add Brand
            </Button>
            <Button 
                onClick={() => setItemVisitable(true)} 
                variant='outline-dark' 
                className='mt-3 p-3'
            >
                Add Item
            </Button>
            <CreateType show={typeVisitable} onHide={() => setTypeVisitable(false)}/>
            <CreateItem show={itemVisitable} onHide={() => setItemVisitable(false)}/>
            <CreateBrand show={brandVisitable} onHide={() => setBrandVisitable(false)}/>
        </Container>
    )
}

export default Admin