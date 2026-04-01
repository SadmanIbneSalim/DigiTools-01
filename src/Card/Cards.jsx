import React from 'react';
import Card from './Card';

const Cards = ({pricing}) => {


   
    
    
    return (


            <div className="card flex flex-col flex-1 h-full bg-base-100 shadow-lg  hover:scale-105
  hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{pricing.tag}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold text-neutral/80">{pricing.name}</h2>
      <span className="text-xl">${pricing.price}/mo</span>
    </div>
    <div>
        <p className='text-[#627382]'>{pricing.description}</p>
        <h2 className='text-3xl mt-2  '>${pricing.price} / <span className='text-[#627382]'>{pricing.period}</span></h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">

        { pricing.features.map((feature,index)=><Card key={index} feature={feature}></Card>)}
      
    </ul>
    <div className="mt-auto">
      <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
    </div>
  </div>
</div>
            
        


        
        
    );
};

export default Cards;