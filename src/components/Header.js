import React, { useEffect, useState } from 'react'
import { navElement, siteName } from '../data'
import styled from 'styled-components'

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [menu, setMenu] = useState(false)
  const menuState = (e) => {
    e.preventDefault()
    setMenu(!menu ? true : false)
  }

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

  useEffect(() => {
    setTimeout(() => {
      alert(
        "Les images, vidéos et contenus présents sur ce site sont fictifs et servent juste d'illustraction."
      )
    }, 2000)
  }, [])

  const Span = styled.span`
    @media (max-width: 425px) {
      padding: 20px 0 20px 20px;
    }
    @media (max-width: 767px) {
      background-color: ${isAtTop && menu
        ? 'rgba(0, 0, 0, 0.9)'
        : isAtTop && !menu
        ? 'transparent'
        : 'rgba(0, 0, 0, 0.7)'};
    }
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

  const ListDiv = styled.div`
    @media (max-width: 768px) {
      border-top: solid 2px white;
      padding-top: 10px;
    }
  `
  const brand = () => {
    return (
      <>
        <SiteLink href="#" className="d-none d-md-block">
          {siteName}
          <SpanLink>.</SpanLink>
        </SiteLink>
        <SiteLink className="d-block d-md-none" onClick={(e) => menuState(e)}>
          {siteName}
          <SpanLink>.</SpanLink>
        </SiteLink>
      </>
    )
  }
  return (
    <React.Fragment>
      <DivHeader className=" justify-content-center">
        <Span className="row col-12 align-items-center text-center  ">
          <div className="col-12 col-lg text-lg-start">{brand()}</div>
          <span className="row col-lg justify-content-center ">
            <ListDiv className=" col-lg ">
              <span className={menu ? '' : 'd-none d-md-block'}>
                <ul className="list-unstyled row  ">
                  {navElement.map(({ id, title, href }) => (
                    <li key={id} className="col my-2 my-md-0 ">
                      <ListLink href={href}>{title}</ListLink>
                    </li>
                  ))}
                </ul>
              </span>
            </ListDiv>
          </span>
        </Span>
      </DivHeader>
    </React.Fragment>
  )
}

export default Header
