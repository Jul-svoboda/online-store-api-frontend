import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/itemsApi'

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => setValue(''))
        onHide()
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
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='name'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-dark' onClick={onHide}>
                    Close
                </Button>
                <Button variant='outline-dark' onClick={addBrand}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand