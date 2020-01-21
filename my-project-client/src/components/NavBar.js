
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

export default class Navbar extends React.Component {
    
    render () {
        return (
            
                <nav className="navbar navbar-expand-sm navbar-style navbar-dark px-sm-5">   
                    <NavLink to='/browse'>
                        <i class="fas fa-home"></i> 
                    </NavLink>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                        <NavLink to="/" className="nav-link">
                            Products
                        </NavLink>
                        </li>
                    </ul>
                    <NavLink to='/cart' className="ml-auto">
                     <button className="checkout-button">
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                     </button>  
                    </NavLink>  
                </nav>
            
            // <div> 
            //     <NavLink 
            //         to="/browse"
            //         exact 
            //         style={link}
            //         activeStyle={{
            //             background: 'darkblue'
            //         }}
            //     >Browse Items</NavLink>
            //     <NavLink 
            //         to="/cart"
            //         exact 
            //         style={link}
            //         activeStyle={{
            //             background: 'darkblue'
            //         }}
            //     >Shopping Cart</NavLink>

            // </div>
        )
    }
}



