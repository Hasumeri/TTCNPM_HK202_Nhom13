import React from 'react'
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap'
import { useContext } from 'react'
import { CookContext } from '../contexts/CookContext'
import SignOutIcon from '../../assets/sign-out-alt-solid.svg'

const Header = () => {
    const {cookSignout} = useContext(CookContext)
    const signout = () => cookSignout()
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>Nhom 13</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-header' />
                <Navbar.Collapse id='navbar-header'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='/' className=''>Pending Order</Nav.Link>
                        <Nav.Link href='/processing' className=''>Processing Order</Nav.Link>
                        <Nav.Link href='/completed' className=''>Completed Order</Nav.Link>
                        <Nav.Link href='/food' className=''>Food</Nav.Link>
                        <Nav.Link href='/signin' className=''>Sign In</Nav.Link>               
                        <Button className='ml-auto' variant='danger' onClick={signout}><Image src={SignOutIcon} alt='Sign Out' width='20'></Image></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header