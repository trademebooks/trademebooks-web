import React, {useState, useEffect} from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import {useDispatch, useSelector} from 'react-redux';
import toastr from 'toastr';
import "./Settings.css";
import {fetchSettings, updateSettings} from '../../actions/settings';

export const Settings = () => {
    const [isChecked,
        setChecked] = useState(false);
    const dispatch = useDispatch();
    const checked = useSelector(state => state.settings.entities.receiveEmail_1);
    const hasError = useSelector(state => state.settings.hasError);
    useEffect(() => {
        async function fetch() {
            if (!hasError) {
                const data = await dispatch(fetchSettings());
                console.log(data)
                setChecked(data[0].receiveEmail_1);
            }
        }
        fetch();
    }, [dispatch])
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    const submitSettings = () => {
        console.log("attempting to submit", isChecked);
        dispatch(updateSettings({receiveEmail_1: isChecked, recieveTexts_1: false}));
        if (!hasError) {
            toastr.success("updated settings");
        }
    }

    return (
        <div className="mt-4">
            <MDBContainer>
                <MDBRow center={true}>
                    <MDBCol md="">
                        <div className="text-center">
                            <h1>Account Settings - March 13, 2020 at 5:34PM</h1>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow >
                    <MDBCol md="1">
                        <input
                            style={{
                            marginTop: "15px"
                        }}
                            className="check-input"
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={isChecked}
                            defaultChecked={checked}
                            id="checkbox1"/>
                    </MDBCol>
                    <MDBCol
                        md="3"
                        style={{
                        marginTop: "0.5rem"
                    }}>
                        <span className="input-text">
                            Email Notifications
                        </span>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{
                    marginTop: "20rem"
                }}>
                    <button type="button" onClick={submitSettings} className="btn btn-primary">Submit</button>
                </MDBRow>

            </MDBContainer>
        </div>
    );
}
export default Settings;
