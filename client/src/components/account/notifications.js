import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

import { getAccountSettings } from '../../actions/account';

const Notifications = ({ }) => {
  const [formData, setFormData] = useState({
    receiveEmail: false,
    receiveSms: false
  });

  const { receiveEmail, receiveSms } = formData;

  useEffect(() => {
    (async () => {
      const account = await getAccountSettings();
      console.log(account);
      setFormData(account);
    })();
  }, [])

  return (
    <>
      <h3 className="mb-4 font-weight-bold">Notifications Settings</h3>

      <div class="custom-control custom-checkbox my-3">
        <input type="checkbox" name="receiveEmail" class="custom-control-input" id="defaultInline1" checked={receiveEmail} />
        <label class="custom-control-label" for="defaultInline1">Receive Emails</label>
      </div>

      <div class="custom-control custom-checkbox my-3">
        <input type="checkbox" name="receiveSms" class="custom-control-input" id="defaultInline2" checked={receiveSms} />
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
