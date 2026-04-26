import React, { useContext, useState } from 'react'
import { Modal, Form, Button, Dropdown, Col } from 'react-bootstrap'
import { Context } from '../..' 

const CreateItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='d-flex flex-column'>
                    <div className='d-flex flex-row '>
                        <Form.Control
                            className='me-3'
                            placeholder='Enter the name'
                        />
                        <Form.Control
                            type='number'
                            placeholder='Enter the price'
                        />
                    </div>
                    <div className='d-flex flex-row mt-3'>
                        <Dropdown className='pe-3'>
                            <Dropdown.Toggle variant='dark'>Select a type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {item.types.map(type => 
                                    <Dropdown.Item key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='pe-3'>
                            <Dropdown.Toggle variant='dark'>Select a brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {item.brands.map(brand => 
                                    <Dropdown.Item key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>                    
                        <Form.Control
                            type='file'
                            placeholder='Upload a photo'
                        />
                    </div>
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                        className='mt-3 mb-3'
                    >
                        Add a new property
                    </Button>
                    {info.map(i => 
                        <div className='d-flex flex-row mb-3 gap-5 justify-content-between' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter the name'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Enter a description'
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant='outline-dark'
                                    onClick={() => deleteInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </div>
                    )}
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-dark' onClick={onHide}>
                    Close
                </Button>
                <Button variant='outline-dark' onClick={onHide}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateItem