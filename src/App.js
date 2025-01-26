import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Sidepane from './components/Sidepane';
import Header from './components/Header';
import SubHeader from './components/SubHeader'

function App() {
  return (
 
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

const About = () => <h1 className="text-2xl font-bold">About Page</h1>;
const Services = () => <h1 className="text-2xl font-bold">Services Page</h1>;
const Contact = () => <h1 className="text-2xl font-bold">Contact Page</h1>;


export default App;