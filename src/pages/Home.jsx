import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Vision from './Vision';
import Offer from './Offer';
import DebitCard from './Curious';
import PerfectCard from './TechStack';
import UserComment from './UserComment';
import Footer from './Footer';
import Workflow from './Workflow';
import Skill from './Skill';
import Projects from './Projects';


function HomePage() {
  return (
    <div>
   

      <div className='md:pt-0'>
        <Hero />
        <Vision />
        <Offer />
        <DebitCard />
        <PerfectCard />
        <UserComment />
        <Skill />
        <Workflow />
        <Projects />      
        <Footer />
      </div>

     
    </div>
  );
}

export default HomePage;
