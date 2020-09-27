import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

const Authentication = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const updateEmail = (e) => { }

  const updatePassword = (e) => { }

  return (
    <>
      <h3 className="mb-4 font-weight-bold">Authentication Settings</h3>
      <div>
        <h4>Change Email</h4>
        <MDBInput
          label="Current Email"
          icon="envelope"
          group
          type="email"
          name="email"
          onChange={onChange}
          required
        />
        <MDBBtn type="submit" onClick={() => props.updateEmail(email)}>
          Save Changes
        </MDBBtn>
      </div>

      <div className="mt-5">
        <h4>Change Password</h4>
        <MDBInput
          label="Current Password"
          icon="lock"
          group
          type="password"
          name="currentPassword"
          onChange={onChange}
          minLength="6"
          validate
        />

        <MDBInput
          label="New Password"
          icon="lock"
          group
          type="password"
          name="newPassword"
          onChange={onChange}
          minLength="6"
          validate
        />
        <MDBInput
          label="Re-enter New Password"
          icon="lock"
          group
          type="password"
          name="newPasswordConfirmation"
          onChange={onChange}
          minLength="6"
          validate
        />
        <MDBBtn>
          Save Changes
        </MDBBtn>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
