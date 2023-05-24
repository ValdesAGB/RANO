import React, { useEffect, useState } from 'react'
import { navElement, siteName } from '../data'
import styled from 'styled-components'

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Span = styled.span`
    padding: 30px 0 30px 20px;
    position: fixed;
    background-color: ${isAtTop ? 'transparent' : 'rgba(0, 0, 0, 0.7)'};
  `

  const ListLink = styled.a`
    color: white;
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
    color: white;
    &:hover {
      color: white;
    }
  `

  const SpanLink = styled.span`
    color: #f03c6f;
  `

  const DivHeader = styled.div`
    color: white;
    z-index: 9;
    position: relative;
    top: 0;
    bottom: 0;
  `

  return (
    <React.Fragment>
      <DivHeader>
        <Span className="row align-items-center   w-100">
          <div className="col">
            <SiteLink href="#">
              {siteName}
              <SpanLink>.</SpanLink>
            </SiteLink>
          </div>
          <div className="col">
            <ul className="list-unstyled row text-center">
              {navElement.map(({ id, title, href }) => (
                <li key={id} className="col">
                  <ListLink href={href}>{title}</ListLink>
                </li>
              ))}
            </ul>
          </div>
        </Span>
      </DivHeader>
    </React.Fragment>
  )
}

export default Header
