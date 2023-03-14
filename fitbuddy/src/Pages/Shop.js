import React from 'react';
import list from './data';
import './shop.css';
import Cards from './Cards';

const Shop = ({handleClick}) => {
  return (
    <section className='bd'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Shop