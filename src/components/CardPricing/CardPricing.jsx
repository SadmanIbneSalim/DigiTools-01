import React, { use } from 'react';
import Cards from '../../Card/Cards';


const CardPricing = ({CardPromise}) => {
     const cardDataa= use(CardPromise);
    const cardData=cardDataa.data
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-300 mx-auto p-4 space-y-4'>
            {
           cardData.map(pricing=> <Cards pricing={pricing}></Cards>)
        }
        </div>
    );
};

export default CardPricing;