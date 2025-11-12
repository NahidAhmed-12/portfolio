import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// আপনার Navbar কম্পোনেন্ট এখানে ইম্পোর্ট করুন (সঠিক পাথ ব্যবহার করুন)
import Navber from "./pages/Navber"; // উদাহরণ: './components/Navber' বা './pages/Navber'

import HomePage from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar কে Routes এর বাইরে রাখায় এটি সব পেজে দেখাবে এবং full-width হবে */}
      <Navber />

      {/* এই সেকশনটি আপনার পেজের কন্টেন্টকে ধারণ করবে */}
      <section className={`bg-gray-900 text-white bg-[url('bg.svg')] bg-no-repeat bg-cover w-full flex flex-col justify-center items-center`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} /> {/* বানানটি ঠিক করা হয়েছে */}
          </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
