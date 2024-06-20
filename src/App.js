import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
      {/* <Projects />
      <ProjectDetail/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
