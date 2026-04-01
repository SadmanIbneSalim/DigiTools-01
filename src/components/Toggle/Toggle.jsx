import React, { use, useState } from 'react';
import CardPricing from '../Card/CardPricing';
import YourCart from '../Cart/YourCart';

const Toggle = ({CardPromise,cart,setCart}) => {
    const cardDataa= use(CardPromise);
        const cardData=cardDataa.data







    const [toggle,setToggle]=useState('Products');
    

    
    return (

        <div className='mt-10 max-w-300 mx-auto'>
            <div className='text-center my-8'>
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
      <p className="text-base-400 py-6">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
       <div>
                <button onClick={()=>setToggle('Products')} className={`btn ${toggle ==='Products'?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-default text-black"}  rounded-full rounded-r-none`}>Products</button>
                <button onClick={()=>setToggle('Cart')} className={`btn ${toggle==="Cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-default text-black"} rounded-full rounded-l-none `}>Cart <span>({cart.length})</span></button>
            </div>
            </div>
            {toggle==='Products' ?<CardPricing setCart={setCart} cart={cart} cardData={cardData}></CardPricing> : <YourCart setCart={setCart} cart={cart}></YourCart>}
            
            

        </div>
        






            
    );
};

export default Toggle;