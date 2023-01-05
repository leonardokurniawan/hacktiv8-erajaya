import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';

const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="px-10 w-4/5 max-w-[1048px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
