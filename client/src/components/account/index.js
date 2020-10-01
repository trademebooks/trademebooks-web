import React, { useState } from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

import User from "./user";
import BookStore from "./bookstore";
import Notifications from "./notifications";

const Account = () => {
  const [activeItemJustified, setActiveItemJustified] = useState('1')

  const toggleJustified = tab => e => {
    if (activeItemJustified !== tab) {
      setActiveItemJustified(tab);
    }
  };

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Account Settings</h3>
      </div>
      <div className="mt-4 mb-4">
        <MDBContainer>
          <MDBNav tabs className="border-bottom" color='indigo'>
            <MDBNavItem>
              <MDBNavLink link to="#" active={activeItemJustified === "1"} onClick={toggleJustified("1")} role="tab" >
                <MDBIcon icon="user" /> User
            </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink link to="#" active={activeItemJustified === "2"} onClick={toggleJustified("2")} role="tab" >
                <MDBIcon icon="store" /> Bookstore
            </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink link to="#" active={activeItemJustified === "3"} onClick={toggleJustified("3")} role="tab" >
                <MDBIcon icon="envelope" /> Notifications
            </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="mt-4"
            activeItem={activeItemJustified}
          >
            <MDBTabPane tabId="1" role="tabpanel">
              <User />
            </MDBTabPane>

            <MDBTabPane tabId="2" role="tabpanel">
              <BookStore />
            </MDBTabPane>

            <MDBTabPane tabId="3" role="tabpanel">
              <Notifications />
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </div>
    </>
  );
};

export default Account;


