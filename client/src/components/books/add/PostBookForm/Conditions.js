import React, { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import './Conditions.scss';

const Conditions = () => {
  const [condition, setCondition] = useState('Good');

  let conditions = [
    {
      name: 'Poor',
      img: require('../../../../img/condition_icons/Poor_condition_default.png'),
      desc: 'No damage, lightly used, no markings',
      imgSelected: require('../../../../img/condition_icons/Poor_condition.png'),
    },
    {
      name: 'Fair',
      img: require('../../../../img/condition_icons/Fair_condition_default.png'),
      desc: 'No damage, lightly used, no markings',
      imgSelected: require('../../../../img/condition_icons/Fair_condition.png'),
    },
    {
      name: 'Good',
      img: require('../../../../img/condition_icons/Good_condition_default.png'),
      desc: 'No damage, lightly used, no markings',
      imgSelected: require('../../../../img/condition_icons/Good_condition.png'),
    },
    {
      name: 'Very Good',
      img: require('../../../../img/condition_icons/Verygood_condition_default.png'),
      desc: 'No damage, lightly used, no markings',
      imgSelected: require('../../../../img/condition_icons/Verygood_condition.png'),
    },
    {
      name: 'Like New',
      img: require('../../../../img/condition_icons/Likenew_condition_default.png'),
      desc: 'No damage, lightly used, no markings',
      imgSelected: require('../../../../img/condition_icons/Likenew_condition.png'),
    },
  ];

  let conditionsElement = [];

  // eslint-disable-next-line
  conditions.map((cond, i) => {
    conditionsElement.push(
      <MDBCol md="2" sm="12" key={i} className="condition">
        <p className="condition-title">{cond.name}</p>
        <img
          className="condition-img"
          src={condition === cond.name ? cond.imgSelected : cond.img}
          alt={cond.name}
          name="condition"
          cond={cond.name}
          onClick={() => setCondition(cond.name)}
        />
        <p className="condition-desc">{cond.desc}</p>
      </MDBCol>
    );
  });

  return (
    <>
      <div className="mt-5">
        <MDBRow className="justify-content-center">{conditionsElement}</MDBRow>
      </div>
    </>
  );
};

export default Conditions;
