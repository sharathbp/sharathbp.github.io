import React, {useEffect, useState} from "react";
import {Link} from "gatsby";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import {graphql, useStaticQuery} from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import useScrollDirection from "../hooks/use-scroll-direction";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import SideNav from "./side-nav";
import { navLinks } from "@config"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  pointer-events: auto;
  user-select: auto;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: ${({theme}) => theme.onBackground};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  
  @media (max-width: 758px) {
    padding: 0 25px;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    ${props => props.scrollDirection === "up" 
      && !props.scrolledToTop 
      && css`
        height: 70px;
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
      `}
    
    ${props => props.scrollDirection === "down"
      && !props.scrollToTop 
      && css`
        height: 70px;
        transform: translateY(-70);
        box-shadow: 0 10px 30px -10px var(--shadow);
  `}
    
  .home {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
      border-radius: 50%;
      border: 1px solid white;
    }
  }
`

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`

const StyledLogo = styled.div`
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      
      a {
        padding: 10px;
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
`

const StyledResumeButton = styled.a`
  background-color: ${({theme}) => theme.surface};
`

const Header = () => {
  const { title, siteUrl } = useSiteMetadata()
  const scrollDirection = useScrollDirection("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
      <StyledHeader>
        <StyledNav>

          <CSSTransition classNames="fade" timeout={2000}>
            <a href="/" aria-label="home" className="home">
              <StaticImage src="../images/profile.jpg" alt="Sharath BP"
                           placeholder="blurred" layout="fixed"
                           width={20} height={20}/>
              <span>Sharath BP</span>
            </a>
          </CSSTransition>

          <StyledLinks>
            <ol>
              {navLinks && navLinks.map(({url, name}, i) => (
                  <CSSTransition key={i} className="fadedown" timeout={2000}>
                    <li key={i} style={{ transitionDelay: `${i*100}ms`}}>
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
              ))}
            </ol>

          </StyledLinks>


          <CSSTransition classNames={"fade"} timeout={2000}>
            <SideNav />
          </CSSTransition>
        </StyledNav>

        <CSSTransition className={"fadedown"} timeout={2000}>
          <StyledResumeButton
              style={{ transitionDelay: `${navLinks.length*100}ms`}}
              href="/resume.pdf" target="_blank"
              rel="noopener noreferrer">
            Resume
          </StyledResumeButton>
        </CSSTransition>
      </StyledHeader>
  )
}

export default Header
