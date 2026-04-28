import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { createType } from '../../http/itemsApi'

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => setValue(''))
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
                Add new type
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
                <Button variant='outline-dark' onClick={addType}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType