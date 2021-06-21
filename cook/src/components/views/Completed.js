import React, { useContext, useEffect, useState } from 'react'
import { CookContext } from '../contexts/CookContext'
import { OrderContext } from '../contexts/OrderContext'
import Header from './Header'
import SingleOrder from './SingleOrder'


const Completed = () => {
    const {orderState: {processing}, getCompletedOrder} = useContext(OrderContext)
    const {loadCook} = useContext(CookContext)
    useEffect(() => loadCook(), [])
    useEffect(() => getCompletedOrder(), [])

    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className='row justify-content-center'>
                { processing.slice(0).reverse().map(one => (
                    <SingleOrder order={one} />
                ))}
            </div>
        </div>
    )
}

export default Completed