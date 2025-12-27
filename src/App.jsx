import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="min-h-screen bg-black text-lime-400">
        {/* Cyberpunk Grid Background */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(lime 1px, transparent 1px), linear-gradient(90deg, lime 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <Navbar/>
        <Hero/>
        <Work/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
  
    </>
  );
}

export default App
