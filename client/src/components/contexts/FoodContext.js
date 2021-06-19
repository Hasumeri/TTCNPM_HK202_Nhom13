import React, { createContext, useEffect, useState } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

export const FoodContext = createContext()

const FoodContextProvider = ({children}) => {
    const [foodState, setFoodState] = useState({
        food: null,
        foodList: [],
    })
    const [cartState, setCartState] = useState({
        cart: [],
        total: 0
    })

    const [showFoodModal, setShowFoodModal] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCartState(JSON.parse(localStorage.getItem('cart')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState))
    }, [cartState])

    // useEffect(() => updateTotal(), [cartState])

    const getFood = async () => {
        try {
            const response = await axios.get(`${apiUrl}/foodHandler/foods`)
            if (response.data.success) {
                setFoodState({
                    ...foodState,
                    foodList: response.data.food
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    const findFood = foodId => {
        const food = foodState.foodList.find(food => food._id === foodId)
        setFoodState({
            ...foodState,
            food: food
        })
    }

    const updateTotal = () => {
        const total = cartState.cart.reduce((prev, item) => {
            return prev + item.amount
        }, 0)
        setCartState({
            ...cartState,
            total: total
        })
    }

    const addToCart = (foodId) => {    
        const food = foodState.foodList.find(food => food._id === foodId)   
        const check = cartState.cart.find(item => item.name === food.name)
        if (!check) {   
            const one = {
                foodName: food.name,
                quantity: 1,
                price: food.price,
                amount: food.price
            }
            setCartState({
                ...cartState,
                cart: [...cartState.cart, one],
                total: cartState.total + food.price
            })
        }
    }

    const decreaseQuantity = (foodName) => {
        cartState.cart.forEach(item => {
            if (item.name === foodName) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                }
                item.amount = item.price*item.quantity
            }
        })
        setCartState({
            ...cartState,
            cart: cartState.cart
        })
        updateTotal()
    }

    const increaseQuantity = (foodName) => {
        cartState.cart.forEach(item => {
            if (item.name === foodName) {
                item.quantity += 1
                item.amount = item.price*item.quantity
            }
        })
        setCartState({
            ...cartState,
            cart: cartState.cart
        })
        updateTotal()
    }

    const removeFood = (foodName) => {
        cartState.cart.forEach((item, index) => {
            if (item.name === foodName) {
                cartState.cart.splice(index, 1)
            }
        })
        setCartState({
            ...cartState,
            cart: cartState.cart
        })
        updateTotal()
    }

    const FoodContextData = {getFood, findFood, setShowFoodModal, addToCart, decreaseQuantity, increaseQuantity, removeFood, updateTotal, foodState, cartState, showFoodModal}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider