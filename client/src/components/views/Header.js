import React from 'react'
import { Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Nav as='ul' className='bg-dark'>
            <Nav.Item as='li' className=''>
                <Nav.Link href='/' className='text-white'>Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li' className=''>
                <Nav.Link href='/signin' className='text-white'>Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li' className=''>
                <Nav.Link href='/signup' className='text-white'>Sign Up</Nav.Link>
            </Nav.Item>
        
        </Nav>
    )
}

export default Header