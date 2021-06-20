import React, { useContext, useState } from 'react'
import { FoodContext } from '../contexts/FoodContext'
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = () => {
    const {foodState: {food}, deleteFoodModal, setDeleteFoodModal} = useContext(FoodContext)

    const closeDialog = () => {
        setDeleteFoodModal(false)
    }

    const styleBtn = {
        paddingLeft: '20px', 
        paddingRight: '20px'
    }

    return (
        <Modal show={deleteFoodModal} animation={false} onHide={closeDialog}>
             <Modal.Header closeButton>
                <Modal.Title><h4>Bạn có chắc chắn muốn xóa?</h4></Modal.Title>
            </Modal.Header>
             <Modal.Footer>
                <Button style={styleBtn} variant='primary' onClick={closeDialog}>Cancel</Button>
                <Button style={styleBtn} variant='danger' onClick={closeDialog}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;

