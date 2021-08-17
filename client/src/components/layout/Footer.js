import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { useLocation } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  const location = useLocation()

  // If the current URL is not in this list, then show the footer in that URL
  const showFooter = ![
    // black list of URLs
    'chat' // e.g on the /chat/** URL, the footer will NOT show
  ].includes(location.pathname.split('/')[1])

  return (
    <>
      {showFooter ? (
        <MDBFooter className="font-small pt-3 pb-1 teal">
          <MDBContainer className="text-center text-md-center">
            <MDBRow>
              <MDBCol md="3">
                <a href="/">
                  <h5>TRADEMEBOOKS</h5>
                </a>
              </MDBCol>
              <MDBCol md="6">
                <ul className="footer-links">
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/add-book">Post a Book</a>
                  </li>
                  <li>
                    <a href="/terms">Terms</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3">
                &copy; {new Date().getFullYear()}{' '}
                <a href="https://www.chosensolutions.ca">Chosen Solutions</a>.
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      ) : (
        <></>
      )}
    </>
  )
}

export default Footer
