import React from 'react';

const Person = () => {
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
  const listItems = names.map((name) => <p key={name.toString()}>{name}</p>);
  return (
    <div>
      <h3>Meet the Team!</h3>
      <div>{listItems}</div>
    </div>
  );
};

export default Person;
