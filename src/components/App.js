import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Home from './Home'
import Features from './Features'
import Video from './Video'
import Download from './Download'
import Footer from './Footer'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    font-family : Montserrat;
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main className="row">
        <Home />
        <Features />
        <Video />
        <Download />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
