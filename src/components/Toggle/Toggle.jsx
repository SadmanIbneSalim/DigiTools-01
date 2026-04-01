import React, { useState } from 'react';

const Toggle = () => {
    const [toggle,setToggle]=useState('Products');
    console.log(setToggle);
    
    return (
        

<div className="hero p-10">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
      <p className="text-base-400 py-6">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
       <div>
                <button onClick={()=>setToggle('Products')} className={`btn ${toggle ==='Products'?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-default text-black"}  rounded-full rounded-r-none`}>Products</button>
                <button onClick={()=>setToggle('Cart')} className={`btn ${toggle==="Cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-default text-black"} rounded-full rounded-l-none `}>Cart <span>(2)</span></button>
            </div>
    </div>
  </div>
</div>



            
    );
};

export default Toggle;