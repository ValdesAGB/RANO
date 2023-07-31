import React, { useEffect, useState } from 'react'
import { navElement } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const ContainerFluid = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const Brand = styled.a`
  @media (max-width: 767px) {
    padding-left: 10px;
  }
`

const ToggleBtn = styled.button`
  @media (max-width: 767px) {
    margin-right: 10px;
  }
  border: none;
  i {
    font-size: 2em;
    color: white;
  }
`

const List = styled.ul`
  @media (max-width: 991px) {
    background-color: #222222;
    margin-top: 12px;
  }
`

const NavItem = styled.li`
  font-size: 15px;
  padding: 0 50px;
  line-height: 50px;

  @media (max-width: 991px) {
    border-top: 1px solid #333333;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`

const NavLink = styled.a`
  font-family: ${polices.tertiary};
  color: ${(props) => (props.id === '1' ? colors.main : 'white')};
  &:hover {
    color: ${colors.main};
  }

  &:focus {
    color: ${colors.main};
  }
`

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

  const Navigation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: ${isAtTop ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    padding: 15px 0;
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <Container className="container">
            <nav className="navbar navbar-expand-lg ">
              <ContainerFluid className="container-fluid">
                <div className="navbar-brand col-lg-4 col-xl-6">
                  <Brand href="/">
                    <img
                      src="https://themesflat.co/html/rano/images/logo.png"
                      alt="logo"
                    />
                  </Brand>
                </div>
                <ToggleBtn
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-list" />
                </ToggleBtn>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <List className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navElement.map(({ id, title, href }) => (
                      <NavItem className="nav-item" key={id}>
                        <NavLink id={id} className="nav-link" href={href}>
                          {title}
                        </NavLink>
                      </NavItem>
                    ))}
                  </List>
                </div>
              </ContainerFluid>
            </nav>
          </Container>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
