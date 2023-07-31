import React from 'react'
import { testimony } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Feedback = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
`

const Header = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 46px;
  font-weight: 400;
  font-family: ${polices.main};
`

const SubTitle = styled.p`
  color: ${colors.startParagraphColor};
  font-family: ${polices.tertiary};
  margin-bottom: 30px;
  margin-top: 20px;
  line-height: 28px;
`

const Underline = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5px;
`

const Paragraph = styled.p`
  font-family: ${polices.tertiary};
  color: ${colors.statsColor};
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 30px;
  font-weight: 200;
`

const Cover = styled.img`
  width: 100%;
`

const Coordonnes = styled.div`
  color: ${colors.statsColor};
  h5,
  h6 {
    font-family: ${polices.tertiary};
  }
`

const Button = styled.div`
  cursor: pointer;
  transition: background-color 0.3s, transform 0.5s 0.2s;
  &:hover {
    transform: scale(0.8);
    background-color: rgba(240, 60, 111, 0.3);
  }
`

const Icone = styled.i`
  font-size: 1.5em;
  color: transparent;
  transition: color 0.3s;
  ${Button}:hover & {
    color: white;
  }
`

function Testimonial() {
  return (
    <React.Fragment>
      <Feedback className="col-lg">
        <Header>
          <Title>169k+ happy clients</Title>

          <SubTitle>
            Social proof buzz network effects non-disclosure sosi agreement
            sales alpha creative holy grail.
          </SubTitle>

          <Underline className="col-lg-9" />
        </Header>
        <div>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimony.map(({ id, poste, name, cover }) => (
                <div
                  className={`carousel-item ${id === '1' ? 'active' : null} `}
                  key={id}
                >
                  <Paragraph>
                    "Social proof buzz network effects non-disclosure agreement
                    sales alpha creative holy grail ownership founders launch
                    party."
                  </Paragraph>
                  <div className="row align-items-center">
                    <div className="col-3 col-sm-2">
                      <Cover src={cover} alt={name} />
                    </div>
                    <Coordonnes className="col">
                      <h5>{name}</h5>
                      <h6>{poste}</h6>
                    </Coordonnes>
                  </div>
                </div>
              ))}
            </div>
            <Button
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
              className="carousel-control-prev"
            >
              <Icone className="bi bi-caret-left" />
            </Button>
            <Button
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              className="carousel-control-next"
            >
              <Icone className="bi bi-caret-right" />
            </Button>
          </div>
        </div>
      </Feedback>
    </React.Fragment>
  )
}

export default Testimonial
