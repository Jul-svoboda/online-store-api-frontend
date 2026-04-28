import React, { useContext, useState, useEffect } from 'react'
import { Modal, Form, Button, Dropdown, Col } from 'react-bootstrap'
import { Context } from '../..' 
import { createItem, fetchBrands, fetchTypes } from '../../http/itemsApi'
import { observer } from 'mobx-react-lite'

const CreateItem = observer( ({show, onHide}) => {
    const {item} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
    }, [item])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', item.selectedBrand.id)
        formData.append('typeId', item.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => onHide())
    }

    const selectFile = e => {
        setFile(e.target.files[0])
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
                Add new item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='d-flex flex-column'>
                    <div className='d-flex flex-row '>
                        <Form.Control
                            className='me-3'
                            placeholder='Enter the name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Control
                            type='number'
                            placeholder='Enter the price'
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div className='d-flex flex-row mt-3'>
                        <Dropdown className='pe-3'>
                            <Dropdown.Toggle variant='dark'>{item.selectedType.name || 'Select a type'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {item.types.map(type => 
                                    <Dropdown.Item 
                                        onClick={() => item.setSelectedType(type)} 
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='pe-3'>
                            <Dropdown.Toggle variant='dark'>{item.selectedBrand.name || 'Select a brand'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {item.brands.map(brand => 
                                    <Dropdown.Item 
                                        onClick={() => item.setSelectedBrand(brand)} 
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>                    
                        <Form.Control
                            type='file'
                            placeholder='Upload a photo'
                            onChange={selectFile}
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
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Enter the name'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant='outline-dark' onClick={addItem}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateItem