import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import Listings from './components/listing';
import About from './components/about';
import Process from './components/process';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import './App.css';

const App: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <Listings />
    <About />
    <Process />
    <Testimonials />
    <Footer />
  </>
);

export default App;