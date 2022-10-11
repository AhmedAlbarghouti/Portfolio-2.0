import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Project from './Components/Project/Project';
import githubIcon from './assets/icons/github.svg'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="projects-header"><h2 className='section-header' >Projects</h2>
      <a className='github-link' href="https://github.com/AhmedAlbarghouti">Github <img src={githubIcon} alt="github" /></a></div>
      
      
      <Project  isFeaturedProject={true} projectTitle="nice" projectDesc="Black is a very powerful color... Well kind of. Black is the absence of color (ie light), which means it is not really a color itself. It has very high contrast, especially with white, so it's a popular color to use on the web." projectTags={["HTML","CSS","123",'lol','test','Node','React']}></Project>
      <Project   projectTitle="nice" projectDesc="descc" projectTags={["HTML","CSS","123"]}></Project>
    </div>
  );
}

export default App;
