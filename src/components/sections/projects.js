import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const Icon = styled.div`
`

const StyledProjectsSection = styled.section`
`

const StyledProjectsContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  cursor: pointer;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  
  .projects {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
`;

const StyledProject = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  width: 100%;
  
  position: relative;
  list-style-type: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.01);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        //transform: translateY(-7px);
        transform: scale(1.2);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProjectDetail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  background: #2c2c2c;
  //border-radius: var(--border-radius);
  //background-color: var(--light-navy);
  transition: var(--transition);


  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({theme}) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }

`


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectDetail = node => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;

    return (
        <StyledProjectDetail>
          <a href={github} target="_blank">
            <header>
              <h3 className="project-title">
                {title}
              </h3>

              <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
            </header>

            <footer>
              {tech && (
                  <ul className="project-tech-list">
                    {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                  </ul>
              )}
            </footer>
          </a>
        </StyledProjectDetail>
    );
  };

  return (
      <StyledProjectsSection id="projects">
        <StyledProjectsContent>

          <div className="projects section">
            <h1 className="section-number">03</h1>
            <h2 className="section-title">Projects</h2>
          </div>

          {/*<h2 ref={revealTitle}>Other Noteworthy Projects</h2>*/}

          {/*<Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>*/}
          {/*  view the archive*/}
          {/*</Link>*/}

          <ul className="projects-grid">
            {
              prefersReducedMotion ?
              (
                <>
                  {projectsToShow &&
                  projectsToShow.map(({ node }, i) => (
                      <StyledProject key={i}>{projectDetail(node)}</StyledProject>
                  ))}
                </>
              ) :
              (
                <TransitionGroup component={null}>
                  {
                    projectsToShow && projectsToShow.map(({ node }, i) =>
                      (
                        <CSSTransition
                            key={i}
                            classNames="fadeup"
                            timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                            exit={false}>
                          <StyledProject
                              key={i}
                              ref={el => (revealProjects.current[i] = el)}
                              style={{
                                transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                              }}>
                            {projectDetail(node)}
                          </StyledProject>
                        </CSSTransition>
                      )
                    )
                  }
                </TransitionGroup>
              )
            }
          </ul>

          {/*<button className="more-button" onClick={() => setShowMore(!showMore)}>*/}
          {/*  Show {showMore ? 'Less' : 'More'}*/}
          {/*</button>*/}

        </StyledProjectsContent>
      </StyledProjectsSection>
  );
};

export default Projects;
