import React from 'react'
import styled from 'styled-components'
import Networks from './Networks'
import Copyright from './Copyright'

const Container = styled.div`
  @media (max-width: 991px) {
    text-align: center !important;
    padding: 30px 0 25px;
    margin: 0;
  }
  padding: 47px 0;
`

const SiteLink = styled.a`
  text-decoration: none;
  font-size: 2em;
  font-weight: 900;
  color: black;
`

const RightDiv = styled.div`
  @media (max-width: 991px) {
    margin: 20px auto;
  }
`

function Footer() {
  return (
    <React.Fragment>
      <footer className="row">
        <Container>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-4">
                <SiteLink href="#">
                  <img
                    src="https://themesflat.co/html/rano/images/logo-black.png"
                    alt="cover"
                  />
                </SiteLink>
              </div>
              <RightDiv className="col-12 col-lg-4">
                <Copyright />
              </RightDiv>
              <div className="col-12 col-lg-4">
                <Networks />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
