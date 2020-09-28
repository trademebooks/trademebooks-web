import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import Person from './person';
import Story from './story';
import PersonBlock from './personBlock';

const About = () => {
  const names = {
    'Yi Chen Zhu': 'I am a genius',
    'Cedric Mosdell': 'Me too',
    'Charles Petchsy': 'Me too',
    'Harrison Fok': 'Not sure',
    'Allan C': 'Me too',
    'Avi Patel': 'Me too',
    'Bo Dan': 'Me too',
    'David Tan': 'Me too',
    'Hassan Azmi': 'Me too',
    'Alex': 'Me too',
    'Shuyi': 'Me too',
  };
  const blocks = Object.keys(names).map(function (key) {
    return (
      <div>
        <p>{key}</p>
        <p>{names[key]}</p>
      </div>
    );
    // return <PersonBlock name={key} description={names[key]}/>
  });
  return (
    <div>
      <h1 className="centeredPlusSpace">About TMB</h1>
      {blocks}
      <div className="gray">
        <Story />
      </div>
    </div>
  );
};

export default About;
