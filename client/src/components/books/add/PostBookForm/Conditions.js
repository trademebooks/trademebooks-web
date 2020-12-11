import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MDBRow, MDBCol } from 'mdbreact'

import { addBook } from '../../../../actions/book'

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
      imageUrl: require(`../../images/conditions/Poor_condition_default.png`),
      imgSelected: require(`../../images/conditions/Poor_condition.png`)
    },
    {
      text: 'FAIR',
      type: CONDITION_TYPES.FAIR,
      description: 'Lots of wear and tear',
      imageUrl: require(`../../images/conditions/Fair_condition_default.png`),
      imgSelected: require(`../../images/conditions/Fair_condition.png`)
    },
    {
      text: 'GOOD',
      type: CONDITION_TYPES.GOOD,
      description: 'Some signs of wear, includes markings',
      imageUrl: require(`../../images/conditions/Good_condition_default.png`),
      imgSelected: require(`../../images/conditions/Good_condition.png`)
    },
    {
      text: 'VERY GOOD',
      type: CONDITION_TYPES.VERY_GOOD,
      description: 'Minimal signs of wear, no markings',
      imageUrl: require(`../../images/conditions/Verygood_condition_default.png`),
      imgSelected: require(`../../images/conditions/Verygood_condition.png`)
    },
    {
      text: 'LIKE NEW',
      type: CONDITION_TYPES.LIKE_NEW,
      description: 'No damage, lightly used, no markings',
      imageUrl: require(`../../images/conditions/Likenew_condition_default.png`),
      imgSelected: require(`../../images/conditions/Likenew_condition.png`)
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
