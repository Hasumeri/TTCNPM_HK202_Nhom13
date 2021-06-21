import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { OrderContext } from '../contexts/OrderContext'

const SingleOrder = ({order}) => {
    const { sendChangeOrderStatusRequest } = useContext(OrderContext)

    const changeOrderStatus = async (orderId) => {
        await sendChangeOrderStatusRequest({orderId})
        window.location.reload()
    }
    
    return (
        <div className='row col-12 my-3 border'>
            <div className='col-8 bg-light' type='button'>{order.createAt}</div>
            <div className='col-4 bg-light d-flex justify-content-end'>
                { order.status === 'pending' && <Button variant='primary' onClick={changeOrderStatus.bind(this, order._id)}>Process</Button> }
                { order.status === 'processing' && <Button variant='warning' onClick={changeOrderStatus.bind(this, order._id)}>Complete</Button> }
                { order.status === 'completed' && <Button variant='success' disabled>Completed</Button> }
            </div>
            { order.listFood.map(one => (
                <div className='col-12 row'>
                    <p className='col-8'>{one.foodName}</p>
                    <p className='col-4'>{one.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default SingleOrder