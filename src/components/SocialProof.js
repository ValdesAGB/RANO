import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import Testimonial from './Testimonial'

const SocialSection = styled.section`
  background-color: ${colors.socialProofSectionBgColor};
  @media (max-width: 991px) {
    padding: 80px 0;
  }
  padding-bottom: 128px;
  padding-top: 184px;
`

const Cover = styled.img`
  width: 100%;
`

function SocialProof() {
  return (
    <React.Fragment>
      <SocialSection>
        <div className="container">
          <div className="row align-items-center">
            <Testimonial />

            <div className="col-lg">
              <Cover
                src="https://themesflat.co/html/rano/images/logo-social.png"
                alt="cover"
              />
            </div>
          </div>
        </div>
      </SocialSection>
    </React.Fragment>
  )
}

export default SocialProof
