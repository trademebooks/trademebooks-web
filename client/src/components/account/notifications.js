import React from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

const Notifications = ({ }) => {
  return (
    <>
      <h3 className="mb-4 font-weight-bold">Notifications Settings</h3>

      <div class="custom-control custom-checkbox my-3">
        <input type="checkbox" class="custom-control-input" id="defaultInline1" />
        <label class="custom-control-label" for="defaultInline1">Receive Emails</label>
      </div>

      <div class="custom-control custom-checkbox my-3">
        <input type="checkbox" class="custom-control-input" id="defaultInline2" />
        <label class="custom-control-label" for="defaultInline2">Receive Text Messages</label>
      </div>

      <div>
        <MDBBtn>
          Save Changes
        </MDBBtn>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
