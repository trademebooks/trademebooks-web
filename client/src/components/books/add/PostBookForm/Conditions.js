import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

import conditions, { CONDITION_TYPES } from './ConditionConstants'

import './Conditions.scss'

const Conditions = ({ book, addBook }) => {
  const [conditionsRow, setConditionsRow] = useState([])

  useEffect(() => {
    const conditionsElement = []
    conditions.forEach((cond, i) => {
      conditionsElement.push(
        <MDBCol md="2" sm="12" key={i} className="condition text-center">
          <p className="condition-title">{cond.text}</p>
          <img
            className="condition-img"
            src={
              book.condition === cond.type ? cond.imgSelected : cond.imageUrl
            }
            alt={cond.text}
            name="condition"
            cond={cond.name}
            onClick={() => {
              addBook({
                ...book,
                condition: cond.type
              })
            }}
          />
          <p className="condition-desc">{cond.description}</p>
        </MDBCol>
      )
    })

    setConditionsRow(conditionsElement)
  }, [book])

  return (
    <>
      <div className="mt-5">
        <MDBRow className="justify-content-center">{conditionsRow}</MDBRow>
      </div>
    </>
  )
}

export default Conditions
