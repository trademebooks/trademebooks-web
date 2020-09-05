import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import {
  updateReceiveEmails,
  updateReceiveTexts,
} from "../../actions/notifications";

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
          onClick={() => {
            props.updateReceiveEmails(
              document.getElementById("receiveEmails").checked
            );
            props.updateReceiveTexts(
              document.getElementById("receiveTexts").checked
            );
          }}
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
  updateReceiveEmails,
  updateReceiveTexts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
