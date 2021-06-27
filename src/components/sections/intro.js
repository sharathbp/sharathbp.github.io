import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { FullProfile, ProfileNoBg, IntroBlob, Bg } from "../../images"
import {StaticImage} from "gatsby-plugin-image";

const StyledIntroBackground1 = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 0;
  height: 900px;
  background-image: linear-gradient(180deg, hsla(0, 0%, 59.2%, 0.4), hsla(0, 0%, 59.2%, 0.4)), 
    linear-gradient(110deg, rgba(45, 129, 136, 0.5) 30%, rgba(45, 129, 136, 0.5) 49%, rgba(45, 129, 136, 0.1)), 
    url(https://picsum.photos/200);
  background-position: 50% 62%;
  background-size: auto, auto, cover;
  background-repeat: repeat, repeat, no-repeat;
`

const StyledIntroSection = styled.section`
        z-index: 100;
  // background-image: 
  // url(${ProfileNoBg}),
  // linear-gradient(110deg, rgb(241,186,89) 30%, rgb(250,205,117) 49%, rgb(162 248 255)),
  // url(${ProfileNoBg});

  
  // position: relative;
  // z-index: 1;
  // //padding-top: 165px;
  // //padding-bottom: 250px;
  // background-image: linear-gradient(180deg, hsla(0, 0%, 59.2%, 0.4), hsla(0, 0%, 59.2%, 0.4)), 
  // url(${FullProfile}), 
  // linear-gradient(110deg, rgba(45, 129, 136, 0.5) 30%, rgba(45, 129, 136, 0.5) 49%, rgba(45, 129, 136, 0.1)), 
  // url(${Bg});
  // background-position: 0px 0px,-210% 75%,0px 0px,50% 62%;
  // background-size: auto,86%,100%,100%;
  // background-repeat: repeat,no-repeat,repeat,no-repeat;
  
`

const StyledIntroContent = styled.section`
  padding: 100px 0;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro-heading {
    margin: 0;
    font-size: clamp(30px, 6vw, 60px);
  }
  
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledIntroBackground = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100vh;
  
  background-image: linear-gradient(180deg, hsla(0, 0%, 59.2%, 0.4), hsla(0, 0%, 59.2%, 0.4)),
  linear-gradient(110deg, rgba(45, 129, 136, 0.5) 30%, rgba(45, 129, 136, 0.5) 49%, rgba(45, 129, 136, 0.1)),
  url("../../images/blobs/about.inline.svg");
  background-position: 0px 0px, 0px 0px, 50% 62%;
  background-size: auto, auto, cover;
  background-repeat: repeat, repeat, no-repeat;
  
  profile-img {
    width: 20px;
    height: 20px;
    opacity: 0.5;
    border-radius: 50%;
    filter: drop-shadow(2px 4px 6px black);
    position: absolute;
    right: 0;
  }
`

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h2>
    <img src={ProfileNoBg} width={20} height={20} alt="pro" className="profile-img" class="profile-img" />
    Hi, I am <h3 style={{display: "inline"}}>Sharath</h3>
  </h2>;
  const two = <h3>a Software Engineer with 1.5 years of experience</h3>;
  const three = <h3 className="intro-heading">I like to build innovative technology to solve everyday problems</h3>;
  const four = (
      <a href={`mailto:${email}`} className="email-link">
        Lets Connect
      </a>
  );

  const items = [one, two, three, four];

  return (
      <StyledIntroSection id="intro">
        <StyledIntroContent>
          {/*<StyledIntroBackground>*/}
          {/*  /!*<img src={ProfileNoBg} alt="pro" className="profile-img" class="profile-img" />*!/*/}
          {/*  /!*<StaticImage src={ProfileNoBg} alt="Profile image" className="profile-img" />*!/*/}
          {/*</StyledIntroBackground>*/}

          {/*<StyledIntroBackground>*/}
          {/*  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">*/}
          {/*    <path fill="#24A148" d="M36.4,-65.1C46.3,-57.5,52.6,-45.7,61.1,-34.2C69.6,-22.7,80.2,-11.3,79.3,-0.5C78.4,10.3,65.9,20.5,55.8,29.3C45.7,38.1,38.1,45.5,29.2,53.2C20.3,61,10.2,69.3,-0.9,70.7C-11.9,72.2,-23.8,67,-34.2,60.1C-44.6,53.2,-53.6,44.7,-61.3,34.4C-69,24.1,-75.5,12,-72.5,1.7C-69.6,-8.6,-57.2,-17.3,-49.5,-27.6C-41.8,-37.9,-38.8,-50,-31.4,-59C-23.9,-68,-11.9,-73.9,0.7,-75.1C13.3,-76.3,26.6,-72.7,36.4,-65.1Z" transform="translate(100 100)" />*/}
          {/*  </svg>*/}
          {/*</StyledIntroBackground>*/}

          <TransitionGroup component={null}>
            {isMounted &&
            items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
            ))}
          </TransitionGroup>
        </StyledIntroContent>
      </StyledIntroSection>
  );
};

export default Intro;

