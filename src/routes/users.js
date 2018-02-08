import express from 'express'

import {

} from '../actions'

const router = express.Router()


router.get('/gene', (req, res, next) => {
  // res.render('users/profile')
  res.send("this is Gene's page")
})


export default router
