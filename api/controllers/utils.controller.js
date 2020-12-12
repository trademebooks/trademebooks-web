const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDto = require('../dtos/requests/contactUsRequestDto')
const contactUsValidator = require('../validators/contactUsValidator')
const mailer = require('../domain/services/mailer/email.service')
const User = require('../domain/models/user.model')
const mongoose = require('mongoose')

const getHealthCheck = catchExceptions(async (req, res) => {
  res.status(200).json(
    globalResponseDto({
      message: 'The application is up and running!'
    })
  )
})

const contactUs = catchExceptions(async (req, res) => {
  const contactUsRequest = contactUsRequestDto(req.body)

  contactUsValidator(contactUsRequest)

  res.status(200).json(
    globalResponseDto({
      message: 'Contact email successfully sent.'
    })
  )
})

const getUsers = (req, res) => {
  try {
    let id = mongoose.Types.ObjectId(req.user.id)

    User.aggregate()
      .match({ _id: { $not: { $eq: id } } })
      .project({
        password: 0,
        __v: 0,
        date: 0
      })
      .exec((err, users) => {
        if (err) {
          console.log(err)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ message: 'Failure' }))
          res.sendStatus(500)
        } else {
          res.send(users)
        }
      })
  } catch (err) {
    console.log(err)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Unauthorized' }))
    res.sendStatus(401)
  }
}

module.exports = {
  getHealthCheck,
  contactUs,
  getUsers
}
