import React, { useState } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
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

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
                <MDBBtn
                  onClick={() => {
                    setAuth(true);
                    setBookstore(false);
                    setNotifications(false);
                  }}
                  name="auth"
                >
                  Authentication
                </MDBBtn>
              </div>
            </MDBRow>
            <MDBRow>
              <div className="w-100">
                <MDBBtn
                  onClick={() => {
                    setAuth(false);
                    setBookstore(true);
                    setNotifications(false);
                  }}
                  name="bookstore"
                >
                  BookStore
                </MDBBtn>
              </div>
            </MDBRow>
            <MDBRow>
              <div className="w-100">
                <MDBBtn
                  onClick={() => {
                    setAuth(false);
                    setBookstore(false);
                    setNotifications(true);
                  }}
                  name="notif"
                >
                  Notifications
                </MDBBtn>
              </div>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>

      {auth && (
        <Authentication email={email} password={password} onChange={onChange} />
      )}
      {bookstore && <BookStore onChange={onChange} />}
      {notifications && <Notifications />}
    </>
  );
};

export default Account;
