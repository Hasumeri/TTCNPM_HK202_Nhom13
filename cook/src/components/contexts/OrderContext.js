import React, { createContext, useState } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

export const OrderContext = createContext()

const OrderContextProvider = ({children}) => {
    const [orderState, setOrderState] = useState({
        order: null,
        pending: [],
        processing: [],
        completed: []
    })

    const [showOrderModal, setShowOrderModal] = useState(false)

    const getPendingOrder = async () => {
        try {
            const response = await axios.get(`${apiUrl}/orderHandler/pendingorders`)
            if (response.data.success) {
                setOrderState({
                    ...orderState,
                    pending: response.data.orders
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getProcessingOrder = async () => {
        try {
            const response = await axios.get(`${apiUrl}/orderHandler/processingorders`)
            if (response.data.success) {
                setOrderState({
                    ...orderState,
                    processing: response.data.orders
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getCompletedOrder = async () => {
        try {
            const response = await axios.get(`${apiUrl}/orderHandler/completedorders`)
            if (response.data.success) {
                setOrderState({
                    ...orderState,
                    processing: response.data.orders
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    const findOrder = orderId => {
        const order = orderState.orderList.find(order => order._id === orderId)
        setOrderState({
            ...orderState,
            order: order
        })
    }

    const sendChangeOrderStatusRequest = async (orderId) => {
        try {
            await axios.post(`${apiUrl}/orderHandler/changeOrderStatus`, orderId)
        }
        catch (error) {
            console.log(error)
        }
    }

    const OrderContextData = {getPendingOrder, getProcessingOrder, getCompletedOrder, findOrder, setShowOrderModal, sendChangeOrderStatusRequest, orderState, showOrderModal}

    return (
        <OrderContext.Provider value = {OrderContextData}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider