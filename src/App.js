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
            <Route path='/personal_website/' exact element={<Home/>} />
            <Route path='/personal_website/projects' element={<Projects/>} />
            <Route path='/personal_website/about' element={<About/>} />
            <Route path='/personal_website/resume' element={<Resume/>} />
            <Route path='/personal_website/contact' element={<Contact/>} />
          </Routes>
        </Router>
    );
}

export default App;
