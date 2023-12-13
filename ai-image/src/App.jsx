import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGen from './components/imageGen';
import Prompt from './Pages/prompt'
import HeroSection from "./components/heroSection";

function App() {
  return (
    <><Router>
    <Routes>
      <Route path="/" element={<HeroSection />}></Route>
      <Route path="/i" element={<ImageGen/>} />
       <Route path="/p" element={<Prompt/>} /> 
    </Routes>
  </Router>
    </>
  );
}

export default App;
