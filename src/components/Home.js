import React from 'react'
import styled from 'styled-components'
import { depositBrand, siteName } from '../data'

function Home() {
  const Section = styled.section`
    background-image: url('https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
    background-position: center;
    padding: 15% 0 0 0;
  `
  const AppleBtn = styled.button`
    padding: 10px 30px 10px 30px;
    margin: 0 50px 0 0;
    border-radius: 30px;
    background-color: #f03c6f;
    color: white;
    &:hover {
      color: black;
      background-color: white;
    }
  `

  const GoogleBtn = styled.button`
    padding: 10px 30px 10px 30px;
    border-radius: 30px;
    background-color: white;
    color: black;
    &:hover {
      color: white;
      background-color: black;
    }
  `

  const H1 = styled.h1`
    width: 85%;
    margin: auto;
  `

  const Icone = styled.div`
    font-size: 4em;
    color: #f03c6f;
  `

  const Paragaph = styled.p`
    color: #777777;
  `
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
  const separation = () => {
    return (
      <span className="row justify-content-center">
        <hr className="col-11" />
      </span>
    )
  }

  const LearnBtn = styled.a`
    color: #f03c6f;
    &:hover {
      color: #f03c6f;
    }
  `
  return (
    <React.Fragment>
      <Section className="text-center text-white">
        <H1>
          <span className="fw-bold">
            {siteName}
            {depositBrand()}
          </span>{' '}
          - a premium landing for App, SasS, Product online marketing...
        </H1>
        <h5 className="mt-2">
          Powerful, easy to customize, amazing design components.
        </h5>
        <div className="my-5">
          <AppleBtn className="btn">
            <i className="bi bi-apple "></i> Get on Apple
          </AppleBtn>
          <GoogleBtn className="btn">
            <i className="bi bi-android2"></i> Get on Google
          </GoogleBtn>
        </div>
        <div>
          <img
            src="https://themesflat.co/html/rano/images/mobile-slide.png"
            alt="1"
          />
        </div>
      </Section>

      <section
        className=" row justify-content-center"
        style={{ margin: '100px 0 100px 0' }}
      >
        <span className="col-10 row align-items-center">
          <div className="col">
            <img
              src="https://themesflat.co/html/rano/images/home-01.png"
              alt="2"
              className="w-100"
            />
          </div>
          <div className="col">
            <Icone className="mb-3">
              <i className="bi bi-brightness-high"></i>
            </Icone>
            <h1 className="fw-light">Simpler than ever to start your own</h1>
            <div
              className="mb-5 col-2"
              style={{ backgroundColor: '#f03c6f', padding: '0.5px' }}
            ></div>
            <Paragaph className="mb-5">
              Social proof buzz network effects non-disclosure agreement sales
              alpha creative holy grail ownership founders launch party. Advisor
              deployment seed round founders angel investor incubator lorem doi
              a met business-to-business.
            </Paragaph>
            <CaseBtn className="btn">See Case Study</CaseBtn>
          </div>
        </span>
      </section>

      {separation()}

      <span className="my-5" id="service" />
      <section className="row justify-content-center my-5">
        <span className="col-11 row align-items-center">
          <div className="col">
            <Icone className="mb-3">
              <i className="bi bi-fingerprint"></i>
            </Icone>
            <h1 className="fw-light">Do more of what you always wanted</h1>
            <div
              className="mb-5 col-2"
              style={{ backgroundColor: '#f03c6f', padding: '0.5px' }}
            ></div>
            <Paragaph className="mb-4">
              Social proof buzz network effects non-disclosure agreement sales
              alpha creative holy grail ownership founders launch party. Advisor
              deployment seed round founders angel investor incubator lorem doi
              a met business-to-business.
            </Paragaph>
            <LearnBtn href="">Learn more</LearnBtn>
            <div className="row mt-5">
              <div
                className="col-4"
                style={{ borderRight: 'solid 0.1em  rgba(0, 0, 0, 0.2)' }}
              >
                <h1 style={{ fontWeight: '400', fontSize: '3.5em' }}>25k+</h1>
                Vote for Design
              </div>
              <div className="col ms-5">
                <h1 style={{ fontWeight: '400', fontSize: '3.5em' }}>17,501</h1>
                Daily website visit
              </div>
            </div>
          </div>
          <div className="col">
            <img
              src="https://themesflat.co/html/rano/images/home-02.png"
              alt="2"
              className="w-100"
            />
          </div>
        </span>
      </section>
    </React.Fragment>
  )
}

export default Home
