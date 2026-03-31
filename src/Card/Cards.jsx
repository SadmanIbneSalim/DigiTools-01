import React from 'react';
import Card from './Card';

const Cards = ({pricing}) => {


   
    
    
    return (

<div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <div>
            <div className="card  bg-base-100 shadow-lg">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{pricing.tag}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{pricing.name}</h2>
      <span className="text-xl">${pricing.price}/mo</span>
    </div>
    <div>
        <p>{pricing.description}</p>
        <h2 className='text-3xl mt-2'>${pricing.price} / {pricing.period}</h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">

        { pricing.features.map(feature=><Card feature={feature}></Card>)}
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>



        
        
    );
};

export default Cards;