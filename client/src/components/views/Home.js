import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <div className='col-md-8 col-lg-6 mx-auto d-block'>
            <Header />
            <p>Menu</p>
        </div>
    )
}

export default Home;