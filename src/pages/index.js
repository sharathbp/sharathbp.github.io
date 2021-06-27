import React from "react"
import PropType from "prop-types"
import styled from "styled-components"
import {About, Experience, Intro, Projects, Layout, Others, Contact} from "@components"

const StyledMainContainer = styled.main`
`;

const IndexPage = ({ location }) => (
    <Layout location={location}>
      <StyledMainContainer>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Others />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )


IndexPage.propTypes = {
  location: PropType.object.isRequired
}

export default IndexPage
