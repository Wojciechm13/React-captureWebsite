import React from 'react';
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles
import {SAbout, SDescription, SImage, SHide} from '../styles';
import styled from 'styled-components';

const ServicesSections = () => {
    return(
        <SServices>
            <SDescription>
                <h2>High <span>quality</span> services</h2>
                <SCards>
                    <SCard>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </SCard>
                    <SCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </SCard>
                    <SCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </SCard>
                    <SCard>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </SCard>
                </SCards>
            </SDescription>
            <SImage>
                <img src={home2} alt="home2"/>
            </SImage>
        </SServices>
    );
};

const SServices = styled(SAbout) `//styled(SAbout) it copies all the styling from the SABout to the SServices
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`; 

const SCards = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const SCard = styled.div`
    flex-basis: 20rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:white;
            color:black;
            padding:1rem;
        }
    }
`;


export default ServicesSections;