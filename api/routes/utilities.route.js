const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contact.controller')

const User = require('../domain/models/user.model');
const globalResponseDTO = require('../responses/globalResponseDTO')

router.post('/contact', contactController.contactUs)
router.get('/users', async (req, res) => {
  const users = await User.find({}).where('_id').ne(req.session.user._id)
  return res
    .status(200)
    .json(
      globalResponseDTO(
        (status = 'success'),
        (code = 200),
        (message = `List of all users.`),
        (data = users),
        (errors = null)
      )
    )
})

module.exports = router
