import React from 'react';
import home1 from '../img/home1.png';

import {SAbout, SDescription, SImage, SHide} from '../styles';
//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () =>{

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity:1, transition: {duration:2}},
    };
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration:0.55, staggerChildren: 0.5}},
    };


    return(
        <SAbout>
            <SDescription>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <SHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </SHide>
                    <SHide>
                        <motion.h2 variants={titleAnim}>Your <span>dreams</span> come</motion.h2>
                    </SHide>
                    <SHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </SHide>
                </motion.div>
                <p>Contact us for any phototgraphy or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </SDescription> 
            <SImage>
                <img src={home1} alt="guy with a camera"/>
            </SImage>
        </SAbout>
    );
};

//Styled components


export default AboutSection;