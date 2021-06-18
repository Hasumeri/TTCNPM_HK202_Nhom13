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
        cart: []
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

    const addToCart = (foodId) => {    
        const food = foodState.foodList.find(food => food._id === foodId)   
        const check = cartState.cart.find(item => item.name === food.name)
        if (!check) {   
            const one = {
                name: food.name,
                quantity: 1,
                price: food.price,
                amount: food.price
            }
            // food.count = 1
            setCartState({
                ...cartState,
                cart: [...cartState.cart, one]
            })
        }    
    }

    const decreaseQuantity = (foodName) => {

    }

    const increaseQuantity = (foodName) => {
        cartState.cart.forEach(item => {
            if (item.name === foodName) {
                item.quantity += 1
                item.amount = item.price*item.quantity
            }
            setCartState({
                ...cartState,
                cart: cartState.cart
            })
        })

    }

    const removeFood = (foodName) => {
        
    }

    const FoodContextData = {getFood, findFood, setShowFoodModal, addToCart, decreaseQuantity, increaseQuantity, removeFood, foodState, cartState, showFoodModal}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider