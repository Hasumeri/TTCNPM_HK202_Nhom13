import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { CookContext } from '../contexts/CookContext'
import { OrderContext } from '../contexts/OrderContext'
import Header from './Header'
import SingleOrder from './SingleOrder'

const Pending = () => {
    const {orderState: {pending, processing, completed}, getPendingOrder} = useContext(OrderContext)
    const {cookState, loadCook} = useContext(CookContext)
    useEffect(() => loadCook(), [])
    useEffect(() => getPendingOrder(), [])

    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className='row justify-content-center'>
                { pending.map(one => (
                    <SingleOrder order={one} />
                ))}
            </div>
        </div>
    )
}

export default Pending