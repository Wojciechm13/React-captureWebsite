import React from 'react';
//Page components
import AboutSection from '../components/AboutSection';
import ServicesSections from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//Animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation';
import ScrollTop from '../components/ScrollTop';


const AboutUs = () =>{
    //<> - this one is called fraction, you can use it if you dont want to have div wrapping your components
    return(
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <> 
        <AboutSection/>
        <ServicesSections/>
        <FaqSection/>
        </> 
        <ScrollTop/>
        </motion.div>
    );
};

export default AboutUs;