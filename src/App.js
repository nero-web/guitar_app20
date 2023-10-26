/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Navbar from "./components/Navbar";
import Videos from "./pages/Videos";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Merch from "./pages/Merch";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className='App'>
      <Router basename="/guitar_app20">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/lessons" element={<Lessons/>}/>
          <Route path="/merch" element={<Merch/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
