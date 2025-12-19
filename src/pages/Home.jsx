import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Vision from './Vision';
import Offer from './Offer';
import Workflow from './Workflow';      
import Skill from './Skill';           
import PerfectCard from './TechStack'; 
import Projects from './Projects';
import UserComment from './UserComment';
import DebitCard from './Curious';      
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <div className='md:pt-0'>
        
        <Hero />

        <Vision />

        <Offer />
        
        <Workflow />

        <Skill />

        <PerfectCard /> 

        <Projects />   

        <UserComment />

        <DebitCard />

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;