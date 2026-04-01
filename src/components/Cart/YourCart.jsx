import React from "react";

const YourCart = ({ cart,setCart }) => {

    const deleteCart=(item)=>{
        const filteredCart=cart.filter(selectedItem=>selectedItem.name !== item.name);
        console.log(filteredCart);
        setCart(filteredCart);
        
        

    }

    
 

  
   return (
    <div className="shadow-lg rounded-2xl p-15 space-y-3 my-3">
      <h3 className="text-3xl font-bold">Your Cart</h3>
      <div className="max-w-300">

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl shadow my-2">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <h3 className="text-xl">${item.price}</h3>
            </div>
            <button onClick={()=>deleteCart(item)} className="btn btn-ghost text-red-600">Remove</button>
          </div>
        ))}

        <div className="flex justify-between p-3 my-4">
          <p>Total:</p>
          <h4 className="text-xl font-bold">$<span>78</span></h4>
        </div>

        <button  className="btn rounded-3xl bg-gradient-to-r from-[#4F39F6] via-[#6A2CF8] to-[#9514FA] p-5 text-white w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );

  
    
  
};

export default YourCart;
