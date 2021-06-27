import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components";
import {graphql, Link, useStaticQuery} from "gatsby";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";


const StyledExperienceSection = styled.section`

`

const StyledExperienceContent = styled.section`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  
  align-items: flex-end;

  //.inner {
  //  display: flex;
  //
  //  @media (max-width: 600px) {
  //    display: block;
  //  }
  //
  //  // Prevent container from jumping
  //  @media (min-width: 700px) {
  //    min-height: 340px;
  //  }
  //}
  
  .tab-content {
    
  }
  
  .company-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
  }
`;


const StyledTabs = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  
  .divider {
    position: absolute;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 50px;
  }
`

const StyledTab = styled.div`
  transform: ${({ isActive }) => (isActive ? 'scale(1.2)' : 'scale(1.0)')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  border-radius: 50%;
  border: 2px solid whitesmoke;
  cursor: pointer;
`

const StyledTabContentWrapper = styled.div`
  display: flex;
`

const StyledTabContent = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  padding: 40px;
  text-align: justify;
  
  p {
    padding: 0;
    margin: 0;
  }
  
  ul {
    padding: 0px;
    //list-style-type: none;
  }
`

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
`


const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      experience: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/experience/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              company
              location
              logo {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const workExperience = data.experience.edges

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  useEffect(() => {
  }, [])

  return (
      <StyledExperienceSection id="experience">
        <StyledExperienceContent>

          <div className="experience section">
            <h1 className="section-number">02</h1>
            <h2 className="section-title">Experience</h2>
          </div>

          <StyledTabs>
            <div className="divider"></div>
            {
              workExperience && workExperience.map((experience, i) => {
                const { frontmatter } = experience.node
                const { logo } = frontmatter
                const image = getImage(logo);
                return (
                    <StyledTab
                        key={i}
                        onClick={() => setActiveTabId(i)}
                        isActive={i==activeTabId}>
                      <GatsbyImage alt="alt" image={image} width={20} className="company-logo" />
                    </StyledTab>
                )
              })
            }
          </StyledTabs>

          <StyledTabContentWrapper>
            {
              workExperience && workExperience.map((experience, i) => {
                const { frontmatter, html } = experience.node
                const { date, title, location, tech, company, range, logo, url } = frontmatter
                const image = getImage(logo);
                return (
                    <StyledTabContent key={i} isActive={i===activeTabId}>
                      <a href={url} target="_blank">{company}</a>
                      <p>{title}</p>
                      <p>{location}</p>
                      <p>{range}</p>
                      <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
                    </StyledTabContent>
                )
              })
            }
          </StyledTabContentWrapper>

        </StyledExperienceContent>
      </StyledExperienceSection>
  )
}

export default Experience
