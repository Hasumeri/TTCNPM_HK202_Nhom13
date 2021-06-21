import React, { useContext, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FoodContext } from '../contexts/FoodContext'

const SingleFood = ({food}) => {
    const {findFood, getFood, setShowFoodModal, sendChangeFoodAvailRequest } = useContext(FoodContext)
    const chooseFood = foodId => {
        findFood(foodId)
        setShowFoodModal(true)
    }
    const changeFoodAvail = (foodId) => {
        sendChangeFoodAvailRequest({foodId})
        window.location.reload()
    }
    
    
    return (
        <div className='row col-12 my-3 border'>
            { food.avail === true && <div className='col-8 text-success' type='button'>{food.name}</div> }
            { food.avail === false && <div className='col-8 text-secondary' type='button'>{food.name}</div> }
            <div className='col-4 d-flex justify-content-end'>
                { food.avail === true && <Button variant='success' onClick={changeFoodAvail.bind(this, food._id)}>Avail</Button> }
                { food.avail === false && <Button variant='secondary' onClick={changeFoodAvail.bind(this, food._id)}>NotAv</Button> }
            </div>
        </div>
    )
}

export default SingleFood