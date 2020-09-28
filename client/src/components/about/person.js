import React from 'react';
import PersonBlock from './personBlock';

const Person = () => {
  return (
    <div className="centerTexts">
      <h3>WHO WE ARE</h3>
      <div>
        <PersonBlock name="Yi Chen Zhu" description="I am a genius" />
      </div>
    </div>
  );
};

export default Person;
