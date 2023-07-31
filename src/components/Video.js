import React from 'react'
import { depositBrand, featureElements, siteName } from '../data'
import styled from 'styled-components'
import video from '../assets/video.mp4'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const poster = 'https://themesflat.co/html/rano/images/video.jpg'

const VideoSection = styled.section`
  @media (max-width: 991px) {
    padding: 80px 0;
  }
  padding-top: 126px;
  padding-bottom: 117px;
`

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 27px;
  font-size: 40px;
  span {
    font-weight: 600;
  }
`

const SubTitle = styled.h5`
  color: ${colors.startParagraphColor};
  font-family: ${polices.tertiary};
  font-weight: lighter;
  font-size: 1.2em;
`

const VideoContent = styled.video`
  width: 100%;
`

const InformationContainer = styled.div`
  margin-top: 40px;
  @media (max-width: 991px) {
    margin-left: 1px;
    margin-right: 1px;
  }
`

const InformationContent = styled.div`
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${colors.main};
    transition: width 300ms;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 991px) {
    border-bottom: 1px solid ${colors.InformationContentBorderColor};
    padding: 21px 0;
  }
`

const IconeContainer = styled.div`
  padding: 0;
  transition: all 300ms;
  text-align: center;
  ${InformationContent}:hover & {
    @media (max-width: 991px) {
      transform: scale(1.2);
    }
    transform: scale(0.9);
  }
`

const Icone = styled.i`
  color: ${colors.main};
  font-size: 3em;
  @media (min-width: 576px) {
    font-size: 4em;
  }
  @media (min-width: 992px) {
    font-size: 3em;
  }
  @media (min-width: 1200px) {
    font-size: 4em;
  }
`
const InformationTitle = styled.h6`
  font-weight: 600;
`

const Paragraph = styled.p`
  font-size: 0.9em;
  font-weight: lighter;
  font-family: ${polices.tertiary};
  color: ${colors.startParagraphColor};
`

function Video() {
  return (
    <React.Fragment>
      <VideoSection id="video">
        <div className="container">
          <TitleContainer className="row justify-content-center">
            <Title className="col-11 col-sm-12 col-lg-10 col-xxl-8">
              <span>
                {siteName}
                {depositBrand()}
              </span>
              - let's see how it's working performance.
            </Title>
            <SubTitle>
              Powerful, easy to customize, amazing design components.
            </SubTitle>
          </TitleContainer>
          <div>
            <VideoContent controls src={video} poster={poster} />
          </div>

          <InformationContainer className="row justify-content-center">
            {featureElements.map(({ id, icone, title }) => (
              <div key={id} className="col-12  col-lg">
                <InformationContent className="row align-items-center">
                  <IconeContainer className="col-2">
                    <Icone className={`bi ${icone}`} />
                  </IconeContainer>
                  <div className="col-10">
                    <InformationTitle>{title}</InformationTitle>
                    <Paragraph>
                      Automatically transform your latest footage into an
                      awesome video with music and effects.
                    </Paragraph>
                  </div>
                </InformationContent>
              </div>
            ))}
          </InformationContainer>
        </div>
      </VideoSection>
    </React.Fragment>
  )
}

export default Video
