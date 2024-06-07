import { useState } from 'react';
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Analytic from './components/Analytic';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytic/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </>  
    
  );
}

export default App
