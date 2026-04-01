import React from 'react';
import Cards from './Cards';


const CardPricing = ({cardData,cart,setCart}) => {
    
    
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-300 mx-auto p-4   '>
            {
           cardData.map(pricing=> <Cards key={pricing.id} pricing={pricing} setCart={setCart} cart={cart}></Cards>)
        }
        </div>
    );
};

export default CardPricing;