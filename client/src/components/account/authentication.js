import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const Authentication = ({ email, password, onChange }) => {
  return (
    <div>
      <div>
        <p className="h2 mb-5">Change Email</p>
        <MDBInput
          icon="envelope"
          group
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <MDBBtn type="submit">Save Changes</MDBBtn>
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
          value={password}
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
