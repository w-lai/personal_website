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
            <Route path='/' exact element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </Router>
    );
}

export default App;
