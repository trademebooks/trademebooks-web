import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import Story from './story'

import './story.css'

const About = () => {
  const names = {
    'Yi Chen Zhu':
      'Yi Chen is a 3rd year Software Engineering student at the University of Toronto. His main role was to code Cedric’s designs and make them come to life on the internet. This is his first time creating a site this big from scratch and it took some balls to do so! Yi Chen specializes in back-end development where he programs the magic that happens whenever a button is clicked or an account is created.',
    'Cedric Mosdell':
      'Cedric is a 3rd year Civil Engineering student at McMaster and loves eating hamburgers. He experienced the hassles of finding his textbooks when he was in first year, so he provided the necessary insight for making MUSBE an online tool tailored to students. Cedric has a background of doing art which had led him to becoming a part-time graphics designer and creating what MUSBE looks like right now. MUSBE was also his first site he has ever designed in his life! Woot!',
    // 'Charles Petchsy': 'Me too',
    'Harrison Fok': 'Harrison is a tennis pro.'
    // 'Allan C': 'Me too',
    // 'Avi Patel': 'Me too',
    // 'Bo Dan': 'Me too',
    // 'David Tan': 'Me too',
    // 'Hassan Azmi': 'Me too',
    // 'Alex': 'Me too',
    // 'Shuyi': 'Me too',
  }
  const imagePaths = [
    './Images/yi_chen.jpg',
    './Images/cedric.jpg',
    './Images/harrison.jpg'
  ]

  const blocks = Object.keys(names).map(function (key, i) {
    return (
      <MDBCol md="4">
        <div key={i}>
          <strong>
            <p style={{ fontSize: '20px' }}>{key}</p>
          </strong>
          <img src={require(`${imagePaths[i]}`)} width="200" height="200" />
          <p style={{ width: '200px', color: '#898989' }}>{names[key]}</p>
        </div>
      </MDBCol>
    )
  })

  return (
    <div>
      <strong>
        <h1 className="justify-content-center" style={{ fontSize: '28px' }}>
          About TMB
        </h1>
      </strong>
      <div className="gray">
        {/* <div className="centerTexts"> */}
        <strong>
          <h3>WHO WE ARE</h3>
        </strong>
        <div>
          <MDBContainer>
            <MDBRow className="justify-content-centre">{blocks}</MDBRow>
          </MDBContainer>
        </div>
        {/* </div> */}
        <Story />
      </div>
    </div>
  )
}

export default About
