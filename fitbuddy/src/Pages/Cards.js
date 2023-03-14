import React from 'react';
import './cards.css';

const Cards = ({item, handleClick}) => {
    const {title, description, price, img} = item;
  return (
    
    <div className="cards1">
        <div className="image_box1">
            <img src={img} alt="Image" />
        </div>
        <div className="details1">
            <p>{title}</p>
            <p>{description}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards