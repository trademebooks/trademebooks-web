import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MDBRow, MDBCol } from 'mdbreact'

import { addBook } from '../../../../actions/book'

import Poor_condition_default from '../../images/conditions/Poor_condition_default.png'
import Poor_condition from '../../images/conditions/Poor_condition.png'
import Fair_condition_default from '../../images/conditions/Fair_condition_default.png'
import Fair_condition from '../../images/conditions/Fair_condition.png'
import Good_condition_default from '../../images/conditions/Good_condition_default.png'
import Good_condition from '../../images/conditions/Good_condition.png'
import Verygood_condition_default from '../../images/conditions/Verygood_condition_default.png'
import Verygood_condition from '../../images/conditions/Verygood_condition.png'
import Likenew_condition_default from '../../images/conditions/Likenew_condition_default.png'
import Likenew_condition from '../../images/conditions/Likenew_condition.png'

import './Conditions.scss'

const Conditions = ({ book, addBook }) => {
  const CONDITION_TYPES = {
    POOR: 'POOR',
    FAIR: 'FAIR',
    GOOD: 'GOOD',
    VERY_GOOD: 'VERY_GOOD',
    LIKE_NEW: 'LIKE_NEW'
  }

  const [currentConditionType, setCurrentConditionType] = useState(
    CONDITION_TYPES.GOOD
  )

  const conditions = [
    {
      text: 'POOR',
      type: CONDITION_TYPES.POOR,
      description: 'Heavily worn, all text are still legible',
      imageUrl: Poor_condition_default,
      imgSelected: Poor_condition
    },
    {
      text: 'FAIR',
      type: CONDITION_TYPES.FAIR,
      description: 'Lots of wear and tear',
      imageUrl: Fair_condition_default,
      imgSelected: Fair_condition
    },
    {
      text: 'GOOD',
      type: CONDITION_TYPES.GOOD,
      description: 'Some signs of wear, includes markings',
      imageUrl: Good_condition_default,
      imgSelected: Good_condition
    },
    {
      text: 'VERY GOOD',
      type: CONDITION_TYPES.VERY_GOOD,
      description: 'Minimal signs of wear, no markings',
      imageUrl: Verygood_condition_default,
      imgSelected: Verygood_condition
    },
    {
      text: 'LIKE NEW',
      type: CONDITION_TYPES.LIKE_NEW,
      description: 'No damage, lightly used, no markings',
      imageUrl: Likenew_condition_default,
      imgSelected: Likenew_condition
    }
  ]

  const conditionsElement = []
  // eslint-disable-next-line
  conditions.map((cond, i) => {
    conditionsElement.push(
      <MDBCol md="2" sm="12" key={i} className="condition text-center">
        <p className="condition-title">{cond.text}</p>
        <img
          className="condition-img"
          src={
            currentConditionType === cond.type
              ? cond.imgSelected
              : cond.imageUrl
          }
          alt={cond.text}
          name="condition"
          cond={cond.name}
          onClick={() => {
            setCurrentConditionType(cond.type)
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

  return (
    <>
      <div className="mt-5">
        <MDBRow className="justify-content-center">{conditionsElement}</MDBRow>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  book: state.book.book
})

const mapDispatchToProps = {
  addBook
}

export default connect(mapStateToProps, mapDispatchToProps)(Conditions)
