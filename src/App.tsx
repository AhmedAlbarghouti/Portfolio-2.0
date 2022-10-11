import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Project from './Components/Project/Project';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <h2 className='section-header' >Projects</h2>
      <Project  projectTitle="nice" projectDesc="descc" projectTags={[12,245,123]}></Project>
    </div>
  );
}

export default App;
