import React, { useState } from "react";
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Programs from './pages/Programs';
import Title from './pages/Title';
import About from './pages/About';
import Title2 from './pages/Title-2';
import Campus from './pages/Campus';
import Title3 from './pages/Title-3';
import Testimonials from './pages/Testimonials';
import Title4 from './pages/Title-4';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import VedioPlayer from "./pages/vedio-Player";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title2 />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title />
        <Campus />
        <Title3 />
        <Testimonials />
        <Title4 />
        <Contact />
        <Footer />
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
