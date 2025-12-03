import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./pages/Navber"; 
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navber />
      
      {/* 
         পরিবর্তনসমূহ:
         1. 'section' ট্যাগ সরিয়ে 'main' দেওয়া হয়েছে।
         2. ফ্লেক্সবক্স (flex, justify-center) সরিয়ে দেওয়া হয়েছে যাতে পেজগুলো তাদের নিজস্ব লেআউট পায়।
         3. নির্দিষ্ট 'bg-image' বা 'bg-gray-900' সরানো হয়েছে।
         4. শুধু একটি বেস কালার 'bg-[#050505]' রাখা হয়েছে যাতে পেজ লোড হওয়ার সময় সাদা ফ্ল্যাশ না মারে।
      */}
      
      <main className="w-full min-h-screen bg-[#050505] text-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            {/* ছোট হাতের 'about' পাথ কনভেনশন অনুযায়ী ভালো */}
            <Route path="/about" element={<About/>} /> 
          </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;