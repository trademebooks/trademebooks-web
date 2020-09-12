import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn } from 'mdbreact';

import './BookFields.scss';

const BookFields = () => {
	return (
		<>
			<div className="book-fields-container">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="8" sm="12">
							<form>
								<div className="form-group">
									<MDBInput label="School" />
								</div>
								<div className="form-group">
									<MDBInput label="Price" />
								</div>
								<div className="form-group">
									<MDBInput label="Description" type="textarea" rows="5" />
								</div>
								<div className="form-group">
									<MDBInput label="Location" />
								</div>
							</form>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" sm="12">
							<MDBBtn outline className="w-100">Preview</MDBBtn>
						</MDBCol>
						<MDBCol md="8" sm="12">
							<MDBBtn className="w-100">Post Book</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		</>
	);
}

export default BookFields;
