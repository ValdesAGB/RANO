import React from 'react'
import { networsContact } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const ListLink = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  transition: color 400ms;
  color: ${colors.CaseBtnHoverBgColor};
  &:hover {
    color: ${colors.main};
  }
`

function Networks() {
  return (
    <React.Fragment>
      <ul className="list-unstyled row justify-content-center m-0">
        {networsContact.map(({ id, icone, href }) => (
          <li key={id} className="col col-sm-1 col-lg-2" title={id}>
            <ListLink href="#">
              <i className={`bi ${icone}`} />
            </ListLink>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Networks
