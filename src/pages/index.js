import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

// components
import Logo from 'components/shared/logo'

// global style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    src: url('/fonts/SF-Pro.ttf');
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    --soul-black: #1A191A;
    --henson-gold: #E0A730;
    --just-white: #FDFDFD;
    --blood-red: #BB2316;

    font-size: 16px;
    font-weight: normal;
    font-family: 'SF Pro', 'Open Sans', sans-serif; 
  }

  body {
    background-color: var(--just-white);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Logo>Coming Soon</Logo>
    </div>
  )
}