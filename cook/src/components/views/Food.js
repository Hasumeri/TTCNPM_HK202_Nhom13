import React, { useContext, useEffect, useState } from 'react'
import { CookContext } from '../contexts/CookContext'
import { FoodContext } from '../contexts/FoodContext'
import Header from './Header'
import SingleFood from './SingleFood'


const Food = () => {
    const {loadCook} = useContext(CookContext)
    const {foodState: {foodList}, getFood} = useContext(FoodContext)

    useEffect(() => loadCook(), [])
    useEffect(() => getFood(), [])
    return (
        <div className='col-md-10 col-lg-8 mx-auto d-block'>
            <Header />
            <div className='row justify-content-center'>
                { foodList.map(one => (
                    <SingleFood food={one} />
                ))}
            </div>
        </div>
    )
}

export default Food