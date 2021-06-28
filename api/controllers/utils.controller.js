const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDto = require('../dtos/requests/contactUsRequestDto')
const contactUsValidator = require('../validators/contactUsValidator')
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

const getUsers = catchExceptions(async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.user.id)

  const users = await User.aggregate()
    .match({ _id: { $not: { $eq: userId } } })
    .project({
      password: 0,
      __v: 0,
      date: 0
    })

  res.status(200).json(
    globalResponseDto({
      message: 'All the list of users in the database.',
      data: users
    })
  )
})

module.exports = {
  getHealthCheck,
  contactUs,
  getUsers
}
