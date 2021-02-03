import React from 'react';
import home1 from '../img/home1.png';

import {SAbout, SDescription, SImage, SHide} from '../styles';
//Framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';

const AboutSection = () =>{

    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration:0.55, staggerChildren: 0.5}},
    };


    return(
        <SAbout>
            <SDescription>
                <motion.div>
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
                <motion.p variants={fade}>Contact us for any phototgraphy or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </SDescription> 
            <SImage>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
            </SImage>
            <Wave/>
        </SAbout>
    );
};

//Styled components


export default AboutSection;