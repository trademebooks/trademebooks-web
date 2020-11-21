import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

let phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={{ position: 'fixed' }}>
        <MDBFooter color="green" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">TRADEMEBOOKS</h5>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Explore</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/about">About</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Careers</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Post a Book</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Connect</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Facebook</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Twitter</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Instagram</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Tiktok</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">WhatsApp</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2">
                <h5 className="title">Legal</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="">Terms</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Privacy</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Chosen Solutions. All rights
              reserved.
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Footer
