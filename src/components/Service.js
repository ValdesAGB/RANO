import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import Stats from './Stats'

const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (max-width: 991px) {
    padding: 80px 0;
  }
`

const Icone = styled.div`
  font-size: 3.5em;
  color: ${colors.main};
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    font-size: 4em;
  }
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 46px;
`

const Underline = styled.div`
  background-color: ${colors.main};
  margin-top: 0.7rem;
  padding: 1px;
`

const Paragaph = styled.p`
  margin-bottom: 27px;
  margin-top: 20px;
  line-height: 28px;
  color: ${colors.startParagraphColor};
  font-family: ${polices.tertiary};
`

const LearnBtn = styled.a`
  color: ${colors.main};
  font-family: ${polices.tertiary};
`

const CoverContainer = styled.div`
  margin-top: 5rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`

const Cover = styled.img`
  width: 100%;
`

function Service() {
  return (
    <React.Fragment>
      <section id="service">
        <Container className="container">
          <section className="row justify-content-center">
            <div className="col-12 col-md">
              <Icone>
                <i className="bi bi-fingerprint" />
              </Icone>
              <Title>Do more of what you always wanted</Title>
              <Underline className="col-3 col-lg-2" />
              <Paragaph>
                Social proof buzz network effects non-disclosure agreement sales
                alpha creative holy grail ownership founders launch party.
                Advisor deployment seed round founders angel investor incubator
                lorem doi a met business-to-business.
              </Paragaph>
              <LearnBtn href="#">Learn more</LearnBtn>
              <div>
                <Stats />
              </div>
            </div>
            <CoverContainer className="col-12 col-sm-10 col-lg">
              <Cover
                src="https://themesflat.co/html/rano/images/home-02.png"
                alt="cover"
              />
            </CoverContainer>
          </section>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Service
