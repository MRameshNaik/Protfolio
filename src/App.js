import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import MyWork from './Components/MyWork/MyWork';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <MyWork/>
      <Contact/>
      <Footer/>
      {/* Add other components here */}
    </div>
  );
}

export default App;
