import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Error from './Components/Error/Error';

import Contact from './Components/Contact/Contact';
function App() {
  return (

    
      <div className="App">
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        
      
        <Footer></Footer>
        </BrowserRouter>
      </div>
    
    
  );
}

export default App;
