import React from 'react'
import { networsContact, siteName } from '../data'
import styled from 'styled-components'

function Footer() {
  const ListLink = styled.a`
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    text-decoration: none;
    transition: color 400ms;
    &:hover {
      color: #f03c6f;
    }
  `
  const SiteLink = styled.a`
    text-decoration: none;
    font-size: 2em;
    font-weight: 900;
    color: black;
  `

  const SpanLink = styled.span`
    color: #f03c6f;
  `

  const date = new Date()

  const LinkFooter = styled.a`
    color: #f03c6f;
    text-decoration: none;
    font-size: 1.1em;
  `

  return (
    <React.Fragment>
      <footer className="container py-0 py-lg-3">
        <div className="row align-items-center  text-center text-lg-start">
          <div className="col-12 col-lg my-2 my-lg-0">
            <SiteLink href="#">
              {siteName}
              <SpanLink>.</SpanLink>
            </SiteLink>
          </div>
          <div className="col-12 col-lg my-2 my-lg-0">
            <p>
              &copy; <LinkFooter href="#">{siteName}</LinkFooter>{' '}
              {date.getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-lg ">
            <ul className="list-unstyled row">
              {networsContact.map(({ id, icone, href }) => (
                <li key={id} className="col btn" title={id}>
                  <ListLink href="#">
                    <i className={`bi ${icone}`} />
                  </ListLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
