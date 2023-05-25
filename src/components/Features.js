import React from 'react'
import { featureElements } from '../data'
import styled from 'styled-components'

function Features() {
  const Section = styled.section`
    @media (max-width: 425px) {
      border-radius: 100% 0% 100% 0% / 27% 100% 0% 73%;
    }

    @media (min-width: 768px) {
      border-radius: 0;
    }

    @media (min-width: 1024px) {
      border-radius: 100% 0% 0% 100% / 44% 0% 100% 56%;
    }

    border-radius: 100% 0% 0% 100% / 44% 0% 100% 56%;
    background: linear-gradient(to right, #dd3e78, #df4276);
    color: white;
  `

  const Icone = styled.i`
    font-size: 4em;
  `
  return (
    <React.Fragment>
      <span className="my-3 my-lg-5" id="features" />
      <Section className="my-5 my-lg-0">
        <div className="row align-items-center py-md-5 py-0">
          <div className="col-md ">
            <img
              src="https://themesflat.co/html/rano/images/home-03.png"
              alt="2"
              className="w-100"
            />
          </div>

          <div className="col-md mt-5 mt-md-0">
            <div>
              <h1 className="mb-3">Where it all 'appens.</h1>
              <div
                className="mb-0 mb-md-5 col-5 col-md-3 col-lg-2"
                style={{ backgroundColor: 'white', padding: '0.5px' }}
              ></div>
            </div>
            <div>
              {featureElements.map(({ id, icone, title }) => (
                <span key={id} className="row my-4 align-items-center ">
                  <Icone className={`bi ${icone} col-3 col-lg-2 text-center`} />
                  <div className="col col-lg-7">
                    <h5>{title}</h5>
                    <p className="fw-light">
                      Automatically transform your latest footage into an
                      awesome video with music and effects.
                    </p>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Features
