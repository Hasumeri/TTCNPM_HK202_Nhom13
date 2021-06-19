import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FoodContext } from '../contexts/FoodContext'
import Header from './Header'

const Cart = () => {
    const {cartState: {cart, total}, decreaseQuantity, increaseQuantity, removeFood} = useContext(FoodContext)

    return ( 
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className=''>
                { cart.map((one) => (
                    <div className='row'>
                        <div className='col-6'>{one.name}</div>
                        <div className='col-6'>
                            <Button onClick={decreaseQuantity.bind(this, one.name)}>-</Button>
                            {one.quantity}
                            <Button onClick={increaseQuantity.bind(this, one.name)}>+</Button>
                            <Button onClick={removeFood.bind(this, one.name)}>x</Button>
                            {one.price}
                            {one.amount}
                        </div>
                    </div>
                ))}
                <div>{total}</div>
            </div>
        </div>
    )
}

export default Cart