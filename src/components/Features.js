import React from 'react'
import { featureElements } from '../data'
import styled from 'styled-components'
import { polices } from '../untils/polices'

const bgImage = 'https://themesflat.co/html/rano/images/big-feature-bg.png'

const FeaturesSection = styled.section`
  background: url(${bgImage}) no-repeat center center / cover;
  color: white;
  @media (max-width: 991px) {
    padding: 80px 0;
  }
`

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`
const CoverContainer = styled.div`
  position: relative;
  top: -5rem;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    margin-bottom: 0px;
    top: -5rem;
  }
`
const Cover = styled.img`
  width: 100%;
`
const Content = styled.div`
  @media (min-width: 991px) {
    padding-top: 243px;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 64px;
  h1 {
    font-size: 46px;
    font-weight: 400;
    padding-bottom: 32px;
  }
`

const Underline = styled.div`
  background-color: white;
  padding: 0.5px;
`

const Information = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
`

const Icone = styled.i`
  font-size: 4em;
  text-align: center;

  transition: transform 0.8s;
  ${Information}:hover & {
    transform: scale(0.85);
  }
`

const Title = styled.h5`
  font-size: 22px;
  font-weight: normal;
  font-family: ${polices.second};
`

const Paragraph = styled.p`
  font-size: 0.95em;
`
function Features() {
  return (
    <React.Fragment>
      <FeaturesSection id="features">
        <Container className="container">
          <div className="row">
            <CoverContainer className="col-lg">
              <Cover
                src="https://themesflat.co/html/rano/images/home-03.png"
                alt="mobile-application-cover-3"
              />
            </CoverContainer>

            <Content className="col-lg">
              <TitleContainer>
                <h1>Where it all 'appens.</h1>
                <Underline className="col-3 col-md-3 col-lg-2" />
              </TitleContainer>
              <div>
                {featureElements.map(({ id, icone, title }) => (
                  <Information key={id} className="row align-items-center">
                    <Icone className={`bi ${icone} col-3 col-lg-2`} />
                    <div className="col col-lg-10 col-xxl-7">
                      <Title>{title}</Title>
                      <Paragraph>
                        Automatically transform your latest footage into an
                        awesome video with music and effects.
                      </Paragraph>
                    </div>
                  </Information>
                ))}
              </div>
            </Content>
          </div>
        </Container>
      </FeaturesSection>
    </React.Fragment>
  )
}

export default Features
