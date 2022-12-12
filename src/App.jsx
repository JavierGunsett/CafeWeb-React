import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import React from "react";


// PAGINAS
import Home from './pages/Home';
import About from './pages/About';
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App(){
    return (
        <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/About" element={<About />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>  
    )
    
    
}

export default App;