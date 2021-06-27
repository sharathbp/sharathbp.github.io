import React from "react";
import styled from "styled-components";
import { LinkedIn, Git, Facebook, Insta, Web, Twitter, Mail} from "../images"
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";

const StyledSocial = styled.div`
  position: fixed;
  padding: 70px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;  
  
  .icon {
    color: green;
    width: 30px;
    border-radius: 50%;
    background: orange;
  }
  
  a {
    margin: 20px;
    cursor: pointer;
  }
`

const Social = () => {


  return (
      <StyledSocial>
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


      </StyledSocial>
  )
}

export default Social
