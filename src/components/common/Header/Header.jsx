import React from 'react'
import './Header.css'
import { Container, NavLink } from 'react-bootstrap'

const Header = () => {
    return (
        <Container>
            <div className='header-container'>
                <NavLink href='/' className='logo'>
                    <h3 className='logo-name text-uppercase fw-bold'>shop.co</h3>
                </NavLink>
                <div className='search-bar'>
                    <input type='text' className='search-input' placeholder='Search' />
                    <i className='bi bi-search icon'></i>
                </div>
                <div className='user-actions'>
                    <div className='cart'>
                        <NavLink href='/' className='cart-link'>
                            <i className='bi bi-cart icon'></i>
                        </NavLink>
                    </div>
                    <div className='profile'>
                        <NavLink href='/' className='profile-link'>
                            <i className='bi bi-person icon'></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header
