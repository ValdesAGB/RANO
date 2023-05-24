import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { DownloadElements } from '../data'

function Download() {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  const CaseBtn = styled.button`
    padding: 10px 50px 10px 50px;
    color: white;
    background-color: #f03c6f;
    border-radius: 30px;
    transition: background-color 700ms, color 2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
    }
  `

  const H1 = styled.h1`
    font-weight: 400;
    font-size: 3em;
  `

  const SubscribeDiv = styled.div`
    background-image: url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 250px;
  `
  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(221, 60, 107, 0.8);
  `

  const SubscribeSpan = styled.span`
    align-items: center;
    justify-content: center;
    z-index: 2;
  `

  const ImageDiv = styled.div`
    background-color: #f7f7f8;
    position: relative;
  `
  const PrincipaleImage = styled.img`
    background-colo: #f03c6f;
  `

  const SliderSlide = styled.div`
    padding: 0 0 0 100px;
    position: absolute;
    top: 11.5%;
    left: 0.27%;
    right: 0;
    bottom: 0%;
    z-index: 1;
    color: white;
  `

  const Icone = styled.i`
    background-color: white;
    color: #dd3c6b;
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    font-size: 4em;
  `

  const SubscribeBtn = styled.button`
    padding: 9px 50px 9px 50px;
    color: #f03c6f;
    background-color: white;
    border-radius: 30px;
    transition: background-color 700ms, color 800ms;
    &:hover {
      background-color: rgb(0, 0, 0);
      color: white;
    }
  `

  return (
    <React.Fragment>
      <span className="my-5" id="download" />
      <section className="mt-3">
        <div className="text-center">
          <H1>19,685 download times</H1>
          <h6 className="fw-light my-3">
            The best Start Up for your Perfect App
          </h6>
          <CaseBtn className="btn">Get App Now</CaseBtn>
        </div>
        <span className="row my-5 ">
          <ImageDiv className="text-center ">
            <img
              src="https://themesflat.co/html/rano/images/mobile.png"
              alt="3"
            />

            <SliderSlide className="">
              <Slider {...settings}>
                {DownloadElements.map((item) => (
                  <div key={item.id}>
                    <img src={item.src} alt={item.alt} className="" />
                  </div>
                ))}
              </Slider>
            </SliderSlide>
          </ImageDiv>
        </span>
        <SubscribeDiv className="row mb-5">
          <SubscribeSpan className="row text-white align-items-center">
            <div className="col-8 row align-items-center ms-5">
              <Icone className="bi bi-lamp col-2 text-center" />
              <p className="col text-start fs-2">
                Start <span className="fw-bold">growing up</span> your startup
                with Rano
              </p>
            </div>
            <div className="col text-end ">
              <SubscribeBtn className="btn">Subscribe Now</SubscribeBtn>
            </div>
          </SubscribeSpan>
          <Div></Div>
        </SubscribeDiv>
      </section>
    </React.Fragment>
  )
}

export default Download
/*  <SubscribeDiv className="row mt-5">
          <SubscribeSpan className="row text-white align-items-center">
            <div className="col-8 row align-items-center ms-5">
              <Icone className="bi bi-lamp col-2 text-center" />
              <p className="col text-start fs-2">
                Start <span className="fw-bold">growing up</span> your startup
                with Rano
              </p>
            </div>
            <div className="col text-end">
              <SubscribeBtn className="btn">Subscribe Now</SubscribeBtn>
            </div>
          </SubscribeSpan>
          <Div></Div>
        </SubscribeDiv>*/
