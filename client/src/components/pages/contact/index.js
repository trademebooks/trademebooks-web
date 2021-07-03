import React, { useState } from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import { toastr } from 'react-redux-toastr'
import metags from '../../../config/metags'
import MetaDecorator from '../../utils/MetaDecorator'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: ''
  })

  const { name, email, body } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    setFormData({
      name: '',
      email: '',
      body: ''
    })

    toastr.success('Message sent! Thank you for contacting us.')
  }

  return (
    <>
      <MetaDecorator
        description={metags.contactPage.description}
        title={metags.contactPage.title}
      />
      <div className="header-container text-center">
        <h1 className="font-weight-bold">Contact Us</h1>
      </div>
      <MDBContainer className="mt-4 contact-form">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={onSubmit}>
              <p className="h5">
                Questions, comments, feedback? Let us know below!
              </p>
              <label htmlFor="contact__name" className="grey-text mt-4">
                Name
              </label>
              <input
                type="text"
                id="contact__name"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
              <label htmlFor="contact__email" className="grey-text mt-4">
                Email address
              </label>
              <input
                type="email"
                id="contact__email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <label htmlFor="contact__body" className="grey-text mt-4">
                What is in your mind?
              </label>
              <textarea
                id="contact__body"
                className="form-control"
                rows="10"
                name="body"
                value={body}
                onChange={onChange}
                required
              />
              <div className="text-center my-4">
                <MDBBtn type="submit" className="btn-block">
                  Send
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ContactPage
