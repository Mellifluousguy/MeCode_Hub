import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './header/Header';
import LoadingBar from 'react-top-loading-bar'


import Home from './main/Home';
import Services from './services/Services';
import Contact from './contact/Contact';
import About from './about/About';
import Costing from './costing/Costing';


function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
        <div className="App">
          <LoadingBar
          height={3}
            color='#A866c6'
            progress={progress}
          />
          <NavBar />
          <Routes>

            <Route exact path="/about" element={<About setProgress={setProgress} />} />
            <Route exact path="/contact" element={<Contact setProgress={setProgress}/>} />
            <Route exact path="/costing" element={<Costing setProgress={setProgress}/>} />
            <Route exact path="/" element={<Home setProgress={setProgress} />} />
            <Route exact path="/services" element={<Services setProgress={setProgress}/>} />

          </Routes>

        </div>
      </Router>

    </>
  );
}

export default App;
