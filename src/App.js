import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Home from './home';
import React from 'react';
import Resume from './resume';

function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route baseName="/personal_website" path='/' exact element={<Home/>} />
            <Route baseName="/personal_website" path='/projects' element={<Projects/>} />
            <Route baseName="/personal_website" path='/about' element={<About/>} />
            <Route baseName="/personal_website" path='/resume' element={<Resume/>} />
            <Route baseName="/personal_website" path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
    );
}

export default App;
