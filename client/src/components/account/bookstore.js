import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const BookStore = ({ onChange }) => {
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
      <MDBBtn type="submit">Save Changes</MDBBtn>
    </div>
  );
};

export default BookStore;
