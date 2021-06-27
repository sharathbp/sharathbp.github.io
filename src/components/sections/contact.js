import React from "react"
import styled from "styled-components";
import {LinkedInBrand, Outlook} from "../../images"

const StyledContactSection = styled.section `
`

const StyledContactContent = styled.section`
  
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  padding: 50px 200px;
  
  .contact-header {
    color: ${({ theme }) => theme.onBackground};
    margin-bottom: 10px;
    font-size: 75px;
    line-height: 80px;
    font-weight: 700;
    text-align: center;
  }
  
  .contact-options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 100%;
    
    .link {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: 1px solid black;
      border-radius: 5px;
      padding: 15px;
      max-width: 500px;
      gap: 5px;

      img {
        width: 30px;
        height: 30px;
        color: maroon;
        fill: green;
      }
    }
  }
  
`

const Contact = () => {
  return (
      <StyledContactSection id="contact">
        <StyledContactContent>
          <h1 className="contact-header">Lets Talk</h1>
          <div className="contact-options">
            <a href={`mailto:sharathbp@outlook.com`} className="link mail">
              <img src={Outlook} alt="mail"/>
              Email Me
            </a>
            <a className="link linkedin" href="https://www.linkedin.com/in/sharath-bp/" target="_blank">
              <img src={LinkedInBrand} alt="linkedin"/>
              Message me on LinkedIn
            </a>
          </div>
        </StyledContactContent>
      </StyledContactSection>
  )
}

export default Contact
