import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DownloadElements } from '../data'

const number = 19685

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 374,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Container = styled.div`
  @media (max-width: 991px) {
    padding: 80px 0;
  }
  padding-top: 126px;
  padding-bottom: 199px;
`

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 46px;
  font-family: ${polices.main};
`

const SubTitle = styled.h5`
  color: ${colors.startParagraphColor};
  font-family: ${polices.tertiary};
  font-weight: lighter;
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 30px;
`

const GetBtn = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: ${colors.main};
  font-family: ${polices.second};
  transition: background-color 0.5s;
  &:hover {
    background-color: rgb(0, 0, 0);
  }
`

const Content = styled.div`
  position: relative;

  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
  @media (min-width: 992px) {
    text-align: center;
  }
`

const PhoneCover = styled.img`
  @media (max-width: 374px) {
    display: none;
  }
`

const SliderContainer = styled.div`
  right: 0;
  bottom: 0;
  z-index: 1;

  @media (min-width: 375px) {
    position: absolute;
    top: 10.2%;
    left: -2%;
  }

  @media (min-width: 576px) {
    top: 10.2%;
    left: -2%;
  }

  @media (min-width: 768px) {
    left: 4%;
  }

  @media (min-width: 992px) {
    left: -1.2%;
  }

  @media (min-width: 1200px) {
    left: -0.8%;
  }
`

const SliderContent = styled.div`
  width: 271px !important;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
  @media (max-width: 374px) {
    padding: 6%;
  }

  @media (min-width: 376px) and (max-width: 575px) {
    padding: 2%;
  }
`

const SliderCover = styled.img`
  width: 100%;
`
function Download() {
  return (
    <React.Fragment>
      <section id="download">
        <Container className="container">
          <TitleContainer>
            <Title>{number.toLocaleString('en-US')} download times </Title>
            <SubTitle>The best Start Up for your Perfect App </SubTitle>
            <GetBtn>Get App Now</GetBtn>
          </TitleContainer>
          <Content>
            <PhoneCover
              src="https://themesflat.co/html/rano/images/mobile.png"
              alt="phone-cover"
            />
            <SliderContainer>
              <Slider {...settings}>
                {DownloadElements.map(({ id, src, alt }) => (
                  <SliderContent key={id}>
                    <div>
                      <SliderCover src={src} alt={alt} />
                    </div>
                  </SliderContent>
                ))}
              </Slider>
            </SliderContainer>
          </Content>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Download
