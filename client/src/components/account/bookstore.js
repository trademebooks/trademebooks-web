import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

const BookStore = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    school: ''
  });

  const { username, location, school } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h3 className="mb-4 font-weight-bold">Bookstore Settings</h3>

      <div>
        <h4>Username</h4>
        <MDBInput
          label="Current Username"
          icon="user"
          group
          type="text"
          name="username"
          onChange={onChange}
          required
        />
      </div>

      <div>
        <h4>Location</h4>
        <MDBInput
          label="Current Location"
          icon="map"
          group
          type="text"
          name="location"
          onChange={onChange}
          minLength="6"
          validate
        />
      </div>

      <div>
        <h4>School</h4>
        <MDBInput
          label="Current School"
          icon="school"
          group
          type="text"
          name="school"
          onChange={onChange}
          minLength="6"
          validate
        />
      </div>

      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
