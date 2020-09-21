import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";

const BookStore = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    school: "",
  });

  const { username, location, school } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const updateUsername = (e) => { }
  const updateLocation = (e) => { }
  const updateSchool = (e) => { }

  return (
    <div>
      <p className="h2 mb-5">Username</p>
      <MDBInput
        label="Type your new password"
        group
        type="username"
        name="username"
        onChange={onChange}
        required
      />
      <p className="h2 mb-5">Location</p>
      <MDBInput
        label="Type your new location"
        group
        type="location"
        name="location"
        onChange={onChange}
        minLength="6"
        validate
      />
      <p className="h2 mb-5">School</p>
      <MDBInput
        label="Type your new school"
        group
        type="school"
        name="school"
        onChange={onChange}
        minLength="6"
        validate
      />
      <MDBBtn
        type="submit"
        onClick={() => {
          props.updateUsername(username);
          props.updateLocation(location);
          props.updateSchool(school);
        }}
      >
        Save Changes
      </MDBBtn>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    location: state.location,
    school: state.school,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
