import React, {useState} from 'react';
import styled from 'styled-components';
import {SAbout} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = () =>{
    const [faqToggle, setFaqToggle] = useState(false);
    const [element, controls] = useScroll();
    return(
        <SFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ullam?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
            
            <AnimateSharedLayout>
            <Toggle title="Daily Schedule">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ullam?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>

            <AnimateSharedLayout>
            <Toggle title= "Different Payment Methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ullam?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>

            <AnimateSharedLayout>
            <Toggle title="What Products Do We Offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ullam?</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </SFaq>
    );
};

const SFaq = styled(SAbout)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding:1rem 0rem;
        }
    }
`;

export default FaqSection;