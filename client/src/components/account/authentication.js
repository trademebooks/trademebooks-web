import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
// import { updateEmail } from "../../actions/account";

const Authentication = ({ myemail, password, onChange }) => {
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    console.log("Updating email");
    setEmail("HI");
    console.log(email);
  };

  return (
    <div>
      <div>
        <p className="h2 mb-5">Change Email</p>
        <MDBInput
          icon="envelope"
          group
          type="email"
          name="email"
          //   value={email}
          onChange={onChange}
          required
        />
        <MDBBtn type="submit" onClick={updateEmail}>
          Save Changes
        </MDBBtn>
      </div>
      <br />
      <div>
        <p className="h2 mb-5">Change Password</p>
        <MDBInput label="Current password" icon="lock" group disabled />
        <MDBInput
          label={"Type your new password"}
          icon="lock"
          group
          type="password"
          name="password"
          //   value={password}
          onChange={onChange}
          minLength="6"
          validate
        />
        <MDBInput
          label="Re-enter new password"
          icon="lock"
          group
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          validate
        />
        <MDBBtn type="submit">Save Changes</MDBBtn>
      </div>
    </div>
  );
};

export default Authentication;
