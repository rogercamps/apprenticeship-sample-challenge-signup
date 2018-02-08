import express from 'express'

import {
  signUp,
  checkUserByEmail
} from '../actions'

const router = express.Router()

router.get('/', (req, res) => res.redirect('/albums'))

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up')
})



export default router
