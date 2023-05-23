import React from 'react'
import { featureElements } from '../data'
import styled from 'styled-components'

function Features() {
  const Section = styled.section`
    border-radius: 100% 0% 0% 100% / 44% 0% 100% 56%;
    background: linear-gradient(to right, #dd3e78, #df4276);
    color: white;
  `

  const Icone = styled.i`
    font-size: 4em;
  `
  return (
    <React.Fragment>
      <span className="my-5" id="features" />
      <Section className="my-5">
        <div className="row align-items-center">
          <div className="col">
            <img
              src="https://themesflat.co/html/rano/images/home-03.png"
              alt="2"
              className="w-100"
            />
          </div>

          <div className="col">
            <div>
              <h1 className="mb-3">Where it all 'appens.</h1>
              <div
                className="mb-5 col-2"
                style={{ backgroundColor: 'white', padding: '0.5px' }}
              ></div>
            </div>
            <div>
              {featureElements.map(({ id, icone, title }) => (
                <span key={id} className="row my-4">
                  <Icone className={`bi ${icone} col-2`} />
                  <div className="col">
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
