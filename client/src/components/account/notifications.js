import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const Notifications = () => {
  return (
    <div>
      <MDBInput label="Receive Emails" type="checkbox" />
      <MDBInput label="Receive Texts" type="checkbox" />
      <MDBBtn type="submit">Save Changes</MDBBtn>
    </div>
  );
};

export default Notifications;
