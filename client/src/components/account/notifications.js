import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";

const Notifications = (props) => {
  return (
    <div>
      <div>
        <MDBInput label="Receive Emails" type="checkbox" id="receiveEmails" />
      </div>
      <br />
      <div>
        <MDBInput label="Receive Texts" type="checkbox" id="receiveTexts" />
      </div>
      <br />
      <div>
        <MDBBtn
          type="submit"
          onClick={() => { }}
        >
          Save Changes
        </MDBBtn>
      </div>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    receiveEmails: state.receiveEmails,
    receiveTexts: state.receiveTexts,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
