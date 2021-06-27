import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import {graphql, useStaticQuery} from "gatsby";
import {AboutBlob, IntroBlob} from "../../images"

const StyledAboutSection = styled.div`
    margin: 100px 0;
`

const StyledAboutContent = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;


  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  
  
  .about-myself {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    align-items: flex-start;
    .section-number {
      font-size: 7rem;
      opacity: 0.3;
      margin-left: 0px;
    }

    .section-title {
      position: relative;
      margin-top: -78px;
      margin-left: 60px;
      font-size: 2rem;
    }
    p {
      text-align: justify;
      
    }
  }
  
  .profile-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100%, 100%;
    background: url(${IntroBlob});
    width: 300px;
    height: 300px;
  }
`;



const StyledText = styled.div`
  //ul.skills-list {
  //  display: grid;
  //  grid-template-columns: repeat(2, minmax(140px, 200px));
  //  padding: 0;
  //  margin: 20px 0 0 0;
  //  overflow: hidden;
  //  list-style: none;
  //
  //  li {
  //    position: relative;
  //    margin-bottom: 10px;
  //    padding-left: 20px;
  //    font-family: var(--font-mono);
  //    font-size: var(--fz-xs);
  //
  //    &:before {
  //      content: '▹';
  //      position: absolute;
  //      left: 0;
  //      color: var(--green);
  //      font-size: var(--fz-sm);
  //      line-height: 12px;
  //    }
  //  }
  //}
`;
const StyledPic = styled.div`
  // position: relative;
  // max-width: 300px;
  //
  // @media (max-width: 768px) {
  //   margin: 50px auto 0;
  //   width: 70%;
  // }
  //
  // .wrapper {
  //   ${({ theme }) => theme.mixins.boxShadow};
  //   display: block;
  //   position: relative;
  //   width: 100%;
  //   border-radius: var(--border-radius);
  //   background-color: var(--green);
  //
  //   &:hover,
  //   &:focus {
  //     background: transparent;
  //     outline: 0;
  //
  //     &:after {
  //       top: 15px;
  //       left: 15px;
  //     }
  //
  //     .img {
  //       filter: none;
  //       mix-blend-mode: normal;
  //     }
  //   }
  //
  //   .img {
  //     position: absolute;
  //     border-radius: var(--border-radius);
  //     //mix-blend-mode: multiply;
  //     //filter: grayscale(100%) contrast(1);
  //     transition: var(--transition);
  //     background: transparent;
  //     &:hover {
  //       transition: var(--transition);
  //     }
  //   }
  //  
  //   .sketch {
  //     background: transparent;
  //     &:hover {
  //       opacity: 0;
  //       transition: var(--transition);
  //     }
  //   }
  //
  //   &:before,
  //   &:after {
  //     content: '';
  //     display: block;
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     border-radius: var(--border-radius);
  //     transition: var(--transition);
  //   }
  //
  //   &:before {
  //     top: 0;
  //     left: 0;
  //     background-color: var(--navy);
  //     mix-blend-mode: screen;
  //   }
  //
  //   &:after {
  //     border: 2px solid var(--green);
  //     top: 20px;
  //     left: 20px;
  //     z-index: -1;
  //   }
  // }
`;



const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/about/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);
  console.log(data)

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
      <StyledAboutSection id="about" ref={revealContainer}>
        <StyledAboutContent>


          <div className="about-myself">
            <h1 className="section-number">01</h1>
            <h2 className="section-title">About Myself</h2>
            <p>
              Hi, I am Sharath BP. I am a hard-working Software Engineer with 1.5 years of experience
              and bachelors in Computer Science.
              I enjoy building automated systems and making them intelligent enough to take decisions
              with the help of Machine Learning.
            </p>
          </div>

          <div className="profile-image">
            <StaticImage
                className="img"
                src="../../images/profile-nobg.png"
                width={150}
                height={150}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
            />
          </div>



          {/*<div className="inner">*/}
          {/*  <StyledText>*/}
          {/*    <div>*/}

          {/*    </div>*/}
          {/*  </StyledText>*/}

          {/*  <StyledPic>*/}
          {/*    <div className="wrapper">*/}
          {/*      <StaticImage*/}
          {/*          className="img"*/}
          {/*          src="../../images/profile-nobg.png"*/}
          {/*          width={500}*/}
          {/*          quality={95}*/}
          {/*          formats={['AUTO', 'WEBP', 'AVIF']}*/}
          {/*          alt="Headshot"*/}
          {/*      />*/}
          {/*      <StaticImage*/}
          {/*          className="sketch"*/}
          {/*          src="../../images/sketch-nobg.png"*/}
          {/*          width={500}*/}
          {/*          quality={95}*/}
          {/*          alt="Profile picture"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </StyledPic>*/}
          {/*</div>*/}
        </StyledAboutContent>
      </StyledAboutSection>
  );
};

export default About;
