const globalResponseDto = require('../dtos/responses/globalResponseDto')
const catchExceptions = require('../utils/catchExceptions')
const contactUsRequestDto = require('../dtos/requests/contactUsRequestDto')
// const contactUsValidator = require('../validators/contactUsValidator')
const User = require('../domain/models/user.model')
const mongoose = require('mongoose')
const config = require('../config')
const mailer = require('../domain/services/mailer/email.service')

const getHealthCheck = catchExceptions(async (req, res) => {
  res.status(200).json(
    globalResponseDto({
      message: 'The application is up and running!'
    })
  )
})

const contactUs = catchExceptions(async (req, res) => {
  const contactUsRequest = contactUsRequestDto(req.body)

  const { name, fromEmail, body } = contactUsRequest

  const mailResponse = await mailer.sendEmail({
    to: config.contactUsEmail,
    subject: `${name} (${fromEmail}) sent you a message on the trademebooks.com contact form.`,
    text: body,
    html: body
  })

  res.status(200).json(
    globalResponseDto({
      message: 'Contact email successfully sent.',
      data: mailResponse
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
