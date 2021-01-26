import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import {SAbout, SDescription, SImage, SHide} from '../styles';

const AboutSection = () =>{
    return(
        <SAbout>
            <SDescription>
                <div className="title">
                    <SHide>
                        <h2>We work to make</h2>
                    </SHide>
                    <SHide>
                        <h2>Your <span>dreams</span> come</h2>
                    </SHide>
                    <SHide>
                        <h2>true.</h2>
                    </SHide>
                </div>
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