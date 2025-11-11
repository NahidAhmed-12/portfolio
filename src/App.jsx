import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <section  className={`bg-gray-900 text-white bg-[url('bg.svg')] bg-no-repeat bg-cover w-full 2xl:w-[1440px]   flex flex-col justify-center b`}>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/Conact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </section>
    
  );
}

export default App;