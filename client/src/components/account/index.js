import React, { useState } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn } from "mdbreact";
import Authentication from "./authentication";
import BookStore from "./bookstore";
import Notifications from "./notifications";

const Account = ({ login, isAuthenticated }) => {
  // const changeHandler = event => {
  //     this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  // };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useState(false);
  const [bookstore, setBookstore] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const { email, password, username, location, school } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onclick = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case "auth":
        setAuth(true);
        setBookstore(false);
        setNotifications(false);
      //   case "bookstore":
      //     setAuth(false);
      //     setBookstore(true);
      //     setNotifications(false);
      //   case "notif":
      //     setAuth(false);
      //     setBookstore(false);
      //     setNotifications(true);
    }
    console.log(e.target.name);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol md="">
              <div className="text-center">
                <h2>Account Settings</h2>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div>
        <MDBContainer>
          <MDBCol md>
            <MDBRow>
              <div className="w-100">
                <MDBBtn onClick={onclick} name="auth">
                  Authentication
                </MDBBtn>
              </div>
            </MDBRow>
            <MDBRow>
              <div className="w-100">
                <MDBBtn onClick={onclick} name="bookstore">
                  BookStore
                </MDBBtn>
              </div>
            </MDBRow>
            <MDBRow>
              <div className="w-100">
                <MDBBtn onClick={onclick} name="notif">
                  Notifications
                </MDBBtn>
              </div>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>

      {/* <Authentication email={email} password={password} onChange={onChange} /> */}
      {/* <BookStore username="A" location="B" school="C" onChange={onChange} /> */}
      {/* <Notifications /> */}
    </>
  );
};

export default Account;
