import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Home from './Home'
import Features from './Features'
import Video from './Video'
import Download from './Download'
import Footer from './Footer'
import Start from './Start'
import Service from './Service'
import SeparationLine from './SeparationLine'
import SocialProof from './SocialProof'
import Suscribe from './Suscribe'
import { polices } from '../untils/polices'

const GlobalStyle = createGlobalStyle`
*{
  font-family :${polices.main};
}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main className="row">
        <Home />
        <Start />
        <SeparationLine />
        <Service />
        <Features />
        <Video />
        <SocialProof />
        <Download />
        <Suscribe />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
