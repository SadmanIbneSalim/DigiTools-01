import React from 'react';
import { ShoppingCart } from "lucide-react";


const NavBar = (cart) => {
  
  
    return (
        <div className='shadow shadow sticky top-0 z-50 bg-white'>
            <div className="navbar  bg-base-100  max-w-300 mx-auto ">
  <div className="navbar-start sha">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="">Products</a></li>
      <li>
        <a href="">Features</a>
      </li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className=" font-bold text-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  ">DigiTools</a>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="">Products</a></li>
      <li>
        <a href="">Features</a>
      </li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
    </ul>
  </div>


  <div className="navbar-end gap-2">
    <span className='relative'><ShoppingCart /></span>
    <p className='bg-red-700 text-white px-1.5 text-[12px] rounded-full absolute top-3 right-44'>{cart.cart.length}</p>
    <a className='text-blue-700 ' href="">Login</a>
    <a className="btn rounded-3xl bg-gradient-to-r from-[#4F39F6] via-[#6A2CF8] to-[#9514FA] p-5 text-white">Get Started</a>
  </div>
</div>
            
        </div>
    );
};

export default NavBar;