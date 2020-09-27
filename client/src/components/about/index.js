import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import Person from './person';
import Story from './story';

const About = () => {
  return (
    <div>
      <h1 className="centeredPlusSpace">About TMB</h1>
      <div className="gray">
        <Person />
        <Story />
      </div>
    </div>
  );
};

export default About;
