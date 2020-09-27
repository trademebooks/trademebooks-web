import React, { useState } from 'react';
import Person from './person';

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
  const parts = names.map((name) => {
    return (
      <div>
        <Person name={name} />
      </div>
    );
  });
  return (
    <div>
      <h1>About</h1>
      <div>{parts}</div>
    </div>
  );
};

export default About;
