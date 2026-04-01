import React from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const YourCart = ({ cart, setCart }) => {
  const deleteCart = (item) => {
    const filteredCart = cart.filter(
      (selectedItem) => selectedItem.name !== item.name,
    );
    console.log(filteredCart);
    setCart(filteredCart);

    toast.warning(`"${item.name}" removed from cart`);
  };
  const handleCheckoutBtn = () => {
    setCart([]);
    toast("⚠️ Your cart is empty!");
  };

  let total = 0;
  cart.forEach((item) => (total = total + item.price));

  return (
    <div className="shadow-lg rounded-2xl p-15 space-y-3 my-3">
      <h3 className="text-3xl font-bold">Your Cart</h3>
      <div className="max-w-300">
        {cart.length !== 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl shadow my-2"
            >
              <div className="flex items-center gap-2">
                <figure className="bg-slate-300 p-3 w-13  rounded-full">
                  <img className="w-9" src={item.icon} />
                </figure>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <h3 className="text-xl">${item.price}</h3>
              </div>
              </div>
              <button
                onClick={() => deleteCart(item)}
                className="btn btn-ghost text-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div>
            <ShoppingCart
              className="mx-auto"
              size={148}
              color="#a8a8a8"
              strokeWidth={1.5}
            />
            <h1 className="text-center text-gray-400 py-10 text-3xl">
              Your cart is empty ;)
            </h1>
          </div>
        )}
        <div className="flex justify-between p-3 my-4">
          <p>Total:</p>
          <h4 className="text-xl font-bold">
            $<span>{total}</span>
          </h4>
        </div>

        <button
          onClick={handleCheckoutBtn}
          className="btn rounded-3xl bg-gradient-to-r from-[#4F39F6] via-[#6A2CF8] to-[#9514FA] p-5 text-white w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default YourCart;
