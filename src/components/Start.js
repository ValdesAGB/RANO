import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
`

const CoverContainer = styled.div`
  @media (max-width: 767px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`

const Cover = styled.img`
  width: 100%;
`

const Icone = styled.div`
  font-size: 4em;
  margin-bottom: 1rem;
  color: ${colors.main};
`

const Title = styled.h1`
  font-weight: 400;
  color: ${colors.startTitleColor};
`

const Underline = styled.div`
  background-color: ${colors.main};
  margin-top: 0.7rem;
  padding: 1px;
`

const Paragaph = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${colors.startParagraphColor};
  font-family: ${polices.tertiary};
`
const CaseBtn = styled.a`
  padding: 15px 50px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  font-family: ${polices.second};
  background-color: ${colors.main};
  transition: background-color 0.8s;
  &:hover {
    background-color: ${colors.CaseBtnHoverBgColor};
  }
`

function Start() {
  return (
    <React.Fragment>
      <section>
        <Container className="container">
          <div>
            <div className="row justify-content-center align-items-center">
              <CoverContainer className="col-12 col-sm-10 col-md-9 col-lg">
                <Cover
                  src="https://themesflat.co/html/rano/images/home-01.png"
                  alt="mobile-application-cover-2"
                />
              </CoverContainer>
              <div className="col-12  col-lg">
                <Icone>
                  <i className="bi bi-brightness-high" />
                </Icone>
                <Title>Simpler than ever to start your own</Title>
                <Underline className="col-4 col-md-2" />
                <Paragaph>
                  Social proof buzz network effects non-disclosure agreement
                  sales alpha creative holy grail ownership founders launch
                  party. Advisor deployment seed round founders angel investor
                  incubator lorem doi a met business-to-business.
                </Paragaph>
                <CaseBtn>See Case Study</CaseBtn>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Start
