import React from 'react';
//Animations
import {motion} from 'framer-motion'
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';


const ContactUs = () =>{
    return(
        <SConatctStyle exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <STitle>
                <SHide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </SHide>
            </STitle>
            <div>
                <SHide>
                <SSocial variants={titleAnim}>
                <Circle/>
                <h2>Send Us A Message</h2>
                </SSocial>
                </SHide>

                <SHide>
                <SSocial variants={titleAnim}>
                <Circle/>
                <h2>Send Us An Email</h2>
                </SSocial>
                </SHide>

                <SHide>
                <SSocial variants={titleAnim}>
                <Circle/>
                <h2>Social Media</h2>
                </SSocial>
                </SHide>
            </div>
        </SConatctStyle>
    );
};

const SConatctStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color:#353535;
    min-height:90vh;

    @media (max-width: 1300px){
            padding:2rem;
            font-size:1rem;
        }
`;

const STitle = styled.div `
    margin-bottom: 4rem;
    color:black;
`;

const SHide = styled.div`
    overflow:hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width:3rem;
    height:3rem;
    background:#353535;
`;

const SSocial = styled(motion.div)`
    display:flex;
    align-items:center;
    h2{
        margin:2rem;
    }
`;

export default ContactUs;