import { createGlobalStyle, styled, css } from "styled-components"

export const breakpoints = {
  tablet: css`min-width: 768px`,
  laptop: css`min-width: 1368px`,
  desktop: css`min-width: 1920px`,
}

export const box_spacings = {
  tablet: css`padding: 1rem 0`,
  laptop: css`padding: 1.5rem 0`,
  desktop: css`padding: 2rem 0`
}

export const GlobalStyles = createGlobalStyle`
  body, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  header {
    position: relative;
  }
`

export const PageWrapper = styled.div`
  position: relative;
  padding: 0 1.5rem;
  @media (${breakpoints.tablet}) {
    padding: 0 2rem;
  }
  @media (${breakpoints.laptop}) {
    padding: 0 3rem;
  }
  @media (${breakpoints.desktop}) {
    padding: 0 4rem;
  }
`