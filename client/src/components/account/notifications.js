import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/account';

import { getAccountSettings, saveAccountSettings } from '../../actions/account';

const Notifications = ({ }) => {
  const [formData, setFormData] = useState({
    receiveEmail: null,
    receiveSms: null
  });

  const { receiveEmail, receiveSms } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  }

  const saveNotificationSettings = async (e) => {
    e.preventDefault();
    const res = await saveAccountSettings(formData);
    console.log({ res })
  }

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
        <input type="checkbox" name="receiveEmail" class="custom-control-input" id="defaultInline1" checked={receiveEmail} onChange={onChange} />
        <label class="custom-control-label" for="defaultInline1">Receive Emails</label>
      </div>

      <div class="custom-control custom-checkbox my-3">
        <input type="checkbox" name="receiveSms" class="custom-control-input" id="defaultInline2" checked={receiveSms} onChange={onChange} />
        <label class="custom-control-label" for="defaultInline2">Receive Text Messages</label>
      </div>

      <div>
        <MDBBtn onClick={saveNotificationSettings}>
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
