import React, { createContext, useState } from 'react'
import { apiUrl } from '../utils/constants'
import axios from 'axios'

export const FoodContext = createContext()

const FoodContextProvider = ({children}) => {
    const [foodState, setFoodState] = useState({
        food: null,
        foodList: [],
    })

    const [showFoodModal, setShowFoodModal] = useState(false)

    const getFood = async () => {
        try {
            const response = await axios.get(`${apiUrl}/foodHandler/foodscook`)
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

    const sendChangeFoodAvailRequest = async (foodId) => {
        try {
            await axios.post(`${apiUrl}/foodHandler/changeFoodAvail`, foodId)
        }
        catch (error) {
            console.log(error)
        }
    }

    const FoodContextData = {getFood, findFood, setShowFoodModal, sendChangeFoodAvailRequest, foodState, showFoodModal}

    return (
        <FoodContext.Provider value = {FoodContextData}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider