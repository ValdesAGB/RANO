import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const bgCover = 'https://themesflat.co/html/rano/images/call-action.jpg'

const SuscribeSection = styled.section`
  position: relative;
  background-image: url(${bgCover});
  background-size: cover;
  background-position: center;
  @media (max-width: 991px) {
    padding: 80px 0;
  }
  padding: 111px 0 96px;
`
const Container = styled.div`
  position: relative;
  z-index: 1;
`

const Content = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
`

const IconeContainer = styled.div`
  background-color: white;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
`

const Icone = styled.i`
  color: ${colors.suscribeIconeColor};
  font-size: 3em;
`

const LittleText = styled.h1`
  color: white;
  font-family: ${polices.tertiary};
  font-weight: 400;
  font-size: 36px;

  span {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    padding-top: 50px;
    text-align: center;
  }
`

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: ${colors.suscribeHoverBgColor};
`

const BtnContainer = styled.div`
  text-align: center;
  @media (min-width: 992px) {
    text-align: end;
  }
`

const SubscribeBtn = styled.button`
  padding: 15px 52px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: ${colors.main};
  background-color: white;
  transition: background-color 0.7s, color 0.8s 0.2s;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`

function Suscribe() {
  return (
    <React.Fragment>
      <SuscribeSection>
        <Container className="container">
          <div>
            <div className="row align-items-center">
              <div className="col-lg-8 col-xl-9">
                <Content className=" row align-items-center">
                  <IconeContainer className="col-1">
                    <Icone className="bi bi-lamp" />
                  </IconeContainer>
                  <LittleText className="col-12 col-md">
                    Start <span>growing up</span> your startup with Rano
                  </LittleText>
                </Content>
              </div>
              <BtnContainer className="col-lg">
                <SubscribeBtn>Subscribe Now</SubscribeBtn>
              </BtnContainer>
            </div>
          </div>
        </Container>
        <Hover />
      </SuscribeSection>
    </React.Fragment>
  )
}

export default Suscribe
