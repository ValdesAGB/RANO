import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { statsElements } from '../data'
import { polices } from '../untils/polices'

const Container = styled.div`
  margin-top: 2rem;
`

const Stat = styled.div`
  font-family: ${polices.tertiary};
  color: ${colors.statsColor};
  @media (max-width: 479px) {
    width: 50%;
  }
  width: 37%;
`

const Number = styled.h1`
  font-weight: 400;
  font-size: 46px;
  color: ${colors.startTitleColor};
  @media (min-width: 992px) {
    font-size: 3.5em;
  }
`

function Stats() {
  return (
    <React.Fragment>
      <Container>
        <div className="row">
          {statsElements.map(({ id, number, text }) => (
            <Stat className="" key={id}>
              <Number>{number.toLocaleString('en-US')}</Number>
              {text}
            </Stat>
          ))}
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Stats
