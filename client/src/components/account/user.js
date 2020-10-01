import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

const Authentication = (props) => {
  const [formData, setFormData] = useState({
    username: ''
  });

  const { username } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const updateUsername = (e) => { }

  return (
    <>
      <h3 className="mb-4 font-weight-bold">User Settings</h3>

      <div className="mt-5">
        <h4>Change Name</h4>
        <MDBInput
          label="First Name"
          icon="user"
          group
          type="text"
          name="first_anem"
          onChange={onChange}
          required
        />
        <MDBInput
          label="Last Name"
          icon="user"
          group
          type="text"
          name="last_name"
          onChange={onChange}
          required
        />
        <MDBBtn type="submit" onClick={updateUsername}>
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
