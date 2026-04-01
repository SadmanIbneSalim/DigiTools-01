
import './App.css';
import Banner from './components/Banner/Banner';

import NavBar from './components/navBar/NavBar';
import Rating from './components/Rating/Rating';
import Toggle from './components/Toggle/Toggle';

import axios, { Axios } from 'axios';
import { Suspense, useState } from 'react';
import CardPricing from './components/Card/CardPricing';
import Step from './components/Step';
import Transparent from './components/Transparent';
import Footer from './components/Footer';

 
const CardPromise= axios.get('Data.json');



function App() {
  const [cart ,setCart]=useState([]);
  

  return (
    <>
    <NavBar cart={cart} setCart={setCart}/>
    <Banner></Banner>
    <Rating></Rating>
    
    
    

    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <Toggle cart={cart} setCart={setCart} CardPromise={CardPromise}></Toggle>
    </Suspense>
    <Step></Step>
    
      <Transparent ></Transparent>

      <Footer></Footer>
    


    
    
      
    
    
    
     

      

     
    </>
  )
}

export default App
