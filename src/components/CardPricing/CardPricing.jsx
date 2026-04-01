import React, { use } from 'react';
import Cards from '../../Card/Cards';


const CardPricing = ({CardPromise}) => {
     const cardDataa= use(CardPromise);
    const cardData=cardDataa.data
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-300 mx-auto p-4  shadow-lg '>
            {
           cardData.map(pricing=> <Cards key={pricing.id} pricing={pricing}></Cards>)
        }
        </div>
    );
};

export default CardPricing;