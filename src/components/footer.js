import React from "react";
import styled from "styled-components";
import {Facebook, Git, Insta, LinkedIn, Mail, Twitter, Web} from "../images";


const StyledFooterSection = styled.div`
  background: black;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  .icon {
    width: 40px;
    height: 40px;
    background: orange;
    border-radius: 50%;
  }
  
  a {
    cursor: pointer;
  }
  
`

const Footer = () => {

  return (
      <StyledFooterSection>
        <a href="https://www.linkedin.com/in/sharath-bp" target="_blank">
          <img alt="linkedin" src={LinkedIn} className="icon" />
        </a>

        <a href="https://github.com/sharathbp" target="_blank">
          <img alt="git" src={Git} className="icon" />
        </a>

        {/*<a href="linkedin.com" target="_blank">*/}
        {/*  <img alt="git" src={Facebook} className="icon" />*/}
        {/*</a>*/}

        <a href={`mailto:sharathbp@outlook.com`} className="email-link">
          <img alt="git" src={Mail} className="icon" />
        </a>

        <a href="https://twitter.com/sharathbp98" target="_blank">
          <img alt="git" src={Twitter} className="icon" />
        </a>
      </StyledFooterSection>
  )
}

export default Footer
