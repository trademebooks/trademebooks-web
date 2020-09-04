import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { updateEmail, updatePassword } from "../../actions/account";
import { connect } from "react-redux";

const Authentication = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /*
  const changeEmail = (e) => {
    e.preventDefault();
    // console.log("Updating email");
    setFormData({ ...formData, email });
    console.log(formData);
    updateEmail(formData);
  };
  */

  return (
    <div>
      <div>
        <p className="h2 mb-5">Change Email</p>
        <MDBInput
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
          onChange={onChange}
          minLength="6"
          validate
        />
        <MDBBtn type="submit" onClick={() => props.updatePassword(password)}>
          Save Changes
        </MDBBtn>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
  };
};

// can do a manual dispatch
const mapDispatchToProps = {
  updateEmail,
  updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
