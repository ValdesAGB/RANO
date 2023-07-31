import React from 'react'
import styled from 'styled-components'
import { siteName } from '../data'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const date = new Date()

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  font-family: ${polices.second};
  color: ${colors.startParagraphColor};
  text-align: center;
`

const LinkFooter = styled.span`
  font-family: ${polices.second};
  font-weight: 300;
  color: ${colors.main};
  font-size: 16px;
`

const WebGrowth = styled.a`
  font-family: ${polices.second};
  font-weight: 300;
  color: ${colors.main};
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s;
  &:hover {
    transform: scale(0.95);
  }
`

function Copyright() {
  return (
    <React.Fragment>
      <Paragraph>
        &copy; <LinkFooter>{siteName}</LinkFooter> {date.getFullYear()}. All
        rights reserved -{' '}
        <WebGrowth href="https://webgrowth.valdesagbokoni.com/" target="_blank">
          WebGrowth
        </WebGrowth>
        .
      </Paragraph>{' '}
    </React.Fragment>
  )
}

export default Copyright
