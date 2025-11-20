import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Vision from './Vision';
import Offer from './Offer';
import DebitCard from './Curious';
import PerfectCard from './TechStack';
import UserComment from './UserComment';
import Footer from './Footer';
import { IoStar } from "react-icons/io5";

function HomePage() {
  return (
    <div>
      {/* Navbar এখন আর এখানে নেই */}

      <div className='md:pt-0'>
        <Hero />
        <Vision />
        <Offer />
        <DebitCard />
        <PerfectCard />
        <UserComment />
        <Footer />
      </div>

     
    </div>
  );
}

export default HomePage;