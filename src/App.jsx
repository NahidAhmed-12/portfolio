import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navber from "./pages/Navber";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navber />

      {/* 
        এখানে bg.svg এর পরিবর্তে একটি অপ্টিমাইজড .webp বা .png ফাইল ব্যবহার করুন।
        উদাহরণ: bg-[url('optimized-bg.webp')]
        আপাতত পারফরম্যান্স পরীক্ষার জন্য ব্যাকগ্রাউন্ড ইমেজটি বাদ দেওয়া হয়েছে।
      */}
      <section className={`bg-gray-900 text-white w-full flex flex-col justify-center items-center`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
