import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';

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

const SAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const SDescription = styled.div`
    flex:1;
    padding-right:5rem;
    font-weight:lighter;
`;

const SImage = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`;

const SHide = styled.div`
    overflow:hidden;
`;

export default AboutSection;