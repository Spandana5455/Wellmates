import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Faqs from './Faqs';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Scrolltop />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faqs/>} />
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
