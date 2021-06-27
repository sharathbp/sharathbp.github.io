import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {useState} from "react";
import PropTypes from 'prop-types';
import Header from "./header";
import Social from "./social";
import Footer from "./footer";
import {GlobalStyle, theme} from "@styles";


const StyledBackground = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.background};
  
`

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState()

  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <StyledContent>
            <Header />
            <Social />
            {children}
            <Footer />
          </StyledContent>

        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout
