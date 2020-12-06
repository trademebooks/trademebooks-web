const express = require('express')
const router = express.Router()
const passport = require('passport')

// Google
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    res.redirect('/')
  }
)

// Facebook
router.get('/auth/facebook', passport.authenticate('facebook'))

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  async (req, res) => {
    res.redirect('/')
  }
)

// Twitter
router.get('/auth/twitter', passport.authenticate('twitter'))

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  async (req, res) => {
    res.redirect('/')
  }
)

// Github
router.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  async (req, res) => {
    res.redirect('/')
  }
)

// Linkedin
router.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  async (req, res) => {
    res.redirect('/')
  }
)

module.exports = router
