import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Skills from './sections/Skills';

const App = () => {
  return (
    <div className="font-sans pt-9">
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
