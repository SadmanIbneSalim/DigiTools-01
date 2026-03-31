
import './App.css';
import Banner from './components/Banner/Banner';

import NavBar from './components/NavBar';
import Rating from './components/Rating/Rating';
import Toggle from './components/Toggle/Toggle';

import axios from 'axios';
import { Suspense } from 'react';
import CardPricing from './components/CardPricing/CardPricing';
 
const CardPromise= axios.get('Data.json');


function App() {
  

  return (
    <>
    <NavBar/>
    <Banner></Banner>
    <Rating></Rating>
    <Toggle></Toggle>
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <CardPricing CardPromise={CardPromise}></CardPricing>
    </Suspense>
    
      
    
    
    
     

      

     
    </>
  )
}

export default App
