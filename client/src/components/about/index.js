import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import Person from './person';
import Story from './story';
import PersonBlock from './personBlock';

const About = () => {
  const names = [
    'Yi Chen Zhu',
    'Cedric Mosdell',
    'Charles Petchsy',
    'Harrison Fok',
    'Allan C',
    'Avi Patel',
    'Bo Dan',
    'David Tan',
    'Hassan Azmi',
    'Alex',
    'Shuyi',
  ];
  //   const names = ['a', 'b', 'c'];
  return (
    <div>
      <h1 className="centeredPlusSpace">About TMB</h1>
      <ul>
        {names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      {/* <div className="gray">
        <PersonBlock name={'Man'} description={'Lee'} />
      </div> */}
      <div className="gray">
        <Story />
      </div>
    </div>
  );
};

export default About;
