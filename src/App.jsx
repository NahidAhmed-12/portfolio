import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./pages/Navber"; 
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";


const GlobalBackground = () => (

  <div className="fixed inset-0 z-[-1] pointer-events-none transform-gpu">
      <div className="absolute inset-0 bg-[#020617]"></div>  
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-orange-600/10 blur-[80px] opacity-50 will-change-transform"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-red-900/10 blur-[80px] opacity-50 will-change-transform"></div>
    
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <GlobalBackground />

      <div className="relative z-50">
        <Navber />
      </div>
      <main className="w-full min-h-screen text-white relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About/>} /> 
          </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;