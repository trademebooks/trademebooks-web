import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import Person from './person';
import Story from './story';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Person />
      <Story />
    </div>
  );
};

export default About;
