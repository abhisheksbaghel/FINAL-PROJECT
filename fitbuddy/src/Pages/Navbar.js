import React from 'react';
import './navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav className='nav1'>
        <div className="nav_box1">
            <span className="my_shop" onClick={()=>setShow(true)}>
                PRODUCTS
            </span>
            <div className="cart1" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar