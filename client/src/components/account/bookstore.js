import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const BookStore = ({ username, location, school, onChange }) => {
  return (
    <div>
      <p className="h2 mb-5">Username</p>
      <MDBInput
        label={"Type your new password"}
        group
        type="username"
        name="username"
        value={username}
        onChange={onChange}
        required
      />
      <p className="h2 mb-5">Location</p>
      <MDBInput
        label={"Type your new location"}
        group
        type="location"
        name="location"
        value={location}
        onChange={onChange}
        minLength="6"
        validate
      />
      <p className="h2 mb-5">School</p>
      <MDBInput
        label={"Type your new school"}
        group
        type="school"
        name="school"
        value={school}
        onChange={onChange}
        minLength="6"
        validate
      />
      <MDBBtn type="submit">Save Changes</MDBBtn>
    </div>
  );
};

export default BookStore;
