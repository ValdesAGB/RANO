import React from 'react'
import styled from 'styled-components'
import 'animate.css'
import { depositBrand, siteName } from '../data'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const bgCover = 'https://themesflat.co/html/rano/images/slide.jpg'

const Section = styled.section`
  background-image: url(${bgCover});
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  padding-top: 130px;
  @media (min-width: 768px) {
    padding-top: 18%;
  }
  @media (min-width: 1200px) {
    padding-top: 200px;
  }
`

const Content = styled.div`
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
  @media (min-width: 576px) {
    font-size: 30px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
`
const Brand = styled.span`
  font-weight: bolder !important;
`

const SubTitle = styled.h5`
  margin-top: 1rem;
  font-weight: 200;
  margin-bottom: 3rem;
  @media (max-width: 575px) {
    font-size: 1em;
    padding: 0;
  }
`

const AppleBtn = styled.div`
  cursor: pointer;
  border-radius: 20px;
  font-family: ${polices.second};
  background-color: ${colors.main};
  color: white;
  transition: background-color 0.4s, color 0.4s 0.2s;
  &:hover {
    color: black;
    background-color: white;
  }
  padding: 3% 10%;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    padding: 3% 6%;
    margin-right: 10px;
  }
  @media (min-width: 1200px) {
    padding: 2% 4%;
  }
  @media (min-width: 1400px) {
    padding: 1% 2%;
  }
`

const GoogleBtn = styled.div`
  cursor: pointer;
  border-radius: 20px;
  font-family: ${polices.second};
  background-color: white;
  color: black;
  transition: background-color 0.4s, color 0.4s 0.2s;
  &:hover {
    color: white;
    background-color: black;
  }
  padding: 3% 10%;
  @media (min-width: 768px) {
    padding: 3% 6%;
    margin-left: 10px;
  }

  @media (min-width: 1200px) {
    padding: 2% 4%;
  }

  @media (min-width: 1400px) {
    padding: 1% 2%;
  }
`

const CoverContainer = styled.div`
  height: 200px;
  overflow: hidden;

  @media (min-width: 576px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
`

const Cover = styled.img`
  width: 100%;
`
function Home() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Content className="row justify-content-center">
            <Title className="col-lg-10 animate__animated animate__fadeInDown animate__slow ">
              <Brand>
                {siteName}
                {depositBrand()}
              </Brand>{' '}
              - a premium landing for App, SasS, Product online marketing...
            </Title>
            <SubTitle className="animate__animated animate__fadeInDown ">
              Powerful, easy to customize, amazing design components.
            </SubTitle>

            <AppleBtn className="col-8 col-sm-7 col-md-4 col-lg-3 animate__animated animate__fadeInLeft animate__slow">
              <i className="bi bi-apple" /> Get on Apple
            </AppleBtn>
            <GoogleBtn className="col-8 col-sm-7 col-md-4 col-lg-3 animate__animated animate__fadeInRight animate__slow ">
              <i className="bi bi-android2" /> Get on Google
            </GoogleBtn>
          </Content>

          <CoverContainer className="row justify-content-center animate__animated animate__fadeInUp animate__delay-1s ">
            <div className="col-12 col-md-9 col-lg-6">
              <Cover
                src="https://themesflat.co/html/rano/images/mobile-slide.png"
                alt="mobile-application-cover"
              />
            </div>
          </CoverContainer>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Home
