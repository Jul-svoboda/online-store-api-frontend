import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const CreateType = ({show, onHide}) => {
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
                        placeholder='name'
                    />
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

export default CreateType