import React from 'react';
//Page components
import AboutSection from '../components/AboutSection';
import ServicesSections from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () =>{
    return(
        //this one is called fraction, you can use it if you dont want to have div wrapping your components
        <> 
        <AboutSection/>
        <ServicesSections/>
        <FaqSection/>
        
        </> 
        // closing fraction
    );
};

export default AboutUs;