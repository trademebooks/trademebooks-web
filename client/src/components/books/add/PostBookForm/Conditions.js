import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

import conditions from './ConditionConstants'

import './Conditions.scss'

const Conditions = ({ book, addBook }) => {
  const [conditionsRow, setConditionsRow] = useState([])

  useEffect(() => {
    const conditionsElement = []

    conditionsElement.push(
      <MDBCol md="2" sm="12" className="condition-title">
        <p className="mb-4">CONDITION</p>
      </MDBCol>
    )

    conditions.forEach((cond, i) => {
      conditionsElement.push(
        <MDBCol md="2" sm="12" key={i} className="condition text-center">
          <p className="my-0">{cond.text}</p>
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
  }, [book, addBook])

  return (
    <>
      <div className="mt-5">
        <MDBRow className="justify-content-center">{conditionsRow}</MDBRow>
      </div>
    </>
  )
}

export default Conditions
