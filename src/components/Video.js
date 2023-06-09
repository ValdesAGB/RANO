import React from 'react'
import { depositBrand, featureElements, siteName, testimony } from '../data'
import styled from 'styled-components'
import poster from '../assets/poster.avif'
import video from '../assets/video.mp4'

function Video() {
  const H5 = styled.h5`
    color: rgba(0, 0, 0, 0.5);
    @media (max-width: 425px) {
      font-weight: 400;
      font-size: 1.2em;
    }
  `

  const Icone = styled.i`
    font-size: 3.5em;
    color: #f03c6f;
  `

  const Paragaph = styled.p`
    font-size: 0.9em;
  `

  const ListDiv = styled.div`
    @media (max-width: 768px) {
      border-bottom: solid 0.5px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: #f03c6f;
      transition: width 300ms;
    }
    &:hover::after {
      width: 100%;
    }
  `
  const Section2 = styled.section`
    background-color: #f8f8f8;
  `

  const H1 = styled.h1`
    @media (max-width: 425px) {
      font-size: 2.5em;
      font-weight: 400;
    }

    font-size: 3em;
  `

  const Paragaph2 = styled.p`
    color: #777777;
  `
  return (
    <React.Fragment>
      <span className="my-5" id="video" />
      <section className="my-5 ">
        <span className="row justify-content-md-center ">
          <div className="col-md-10 col-lg-9 col-xl-7 col-12 text-center my-4 my-md-5 ">
            <h1 className="fw-light fw-bold">
              <span className="fw-bold">
                {siteName}
                {depositBrand()}
              </span>{' '}
              - let's see how it's working performance.
            </h1>
            <H5 className="mt-3">
              Powerful, easy to customize, amazing design components.
            </H5>
          </div>
          <div className="col-12 col-md-11 ">
            <video controls src={video} poster={poster} className="w-100">
              Votre navigateur ne prend pas en charge la lecture de vidéos
              HTML5.
            </video>
          </div>

          <div className=" col-12 col-md-11 my-5  ">
            <span className="row justify-content-center ">
              {featureElements.map(({ id, icone, title }) => (
                <ListDiv
                  key={id}
                  className="col-12 col-md-10  col-lg row mx-md-2 align-items-center   "
                >
                  <Icone className={`bi ${icone} col-3 col-md-1 col-lg-3 `} />
                  <div className="col-9 col-md offset-0 offset-md-1 offset-lg-0">
                    <h6>{title}</h6>
                    <Paragaph className="fw-light">
                      Automatically transform your latest footage into an
                      awesome video with music and effects.
                    </Paragaph>
                  </div>
                </ListDiv>
              ))}
            </span>
          </div>
        </span>
      </section>

      <Section2 className="">
        <span className="row justify-content-center pt-5 ">
          <span className="col-12 col-md-11 row align-items-center justify-content-center">
            <div className="col-12 col-lg mb-5">
              <H1 className="mb-3 ">169k+ happy clients</H1>

              <Paragaph2 className="mb-4">
                Social proof buzz network effects non-disclosure sosi agreement
                sales alpha creative holy grail.
              </Paragaph2>
              <div
                className="mb-5 col-9"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  padding: '0.5px',
                }}
              ></div>
              <div>
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {testimony.map(({ id, poste, name }) => (
                      <div
                        className={`carousel-item ${
                          id === '1' ? 'active' : null
                        } `}
                        data-bs-interval="3000"
                        key={id}
                      >
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat."
                        </p>
                        <span className="row align-items-center">
                          <span className="col-2">
                            <img
                              src="https://themesflat.co/html/rano/images/testimonial.png"
                              className="d-block w-100"
                              alt="1"
                            />
                          </span>
                          <span className="col">
                            <h5>{name}</h5>
                            <h6>{poste}</h6>
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg">
              <img
                src="https://themesflat.co/html/rano/images/logo-social.png"
                alt="2"
                className="w-100"
              />
            </div>
          </span>
        </span>
      </Section2>
    </React.Fragment>
  )
}

export default Video
