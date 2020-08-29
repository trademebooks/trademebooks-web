import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const Notifications = () => {
  return (
    <div>
      <div>
        <MDBInput label="Receive Emails" type="checkbox" />
      </div>
      <br />
      <div>
        <MDBInput label="Receive Texts" type="checkbox" />
      </div>
      <br />
      <div>
        <MDBBtn type="submit">Save Changes</MDBBtn>
      </div>
      <br />
    </div>
  );
};

export default Notifications;
