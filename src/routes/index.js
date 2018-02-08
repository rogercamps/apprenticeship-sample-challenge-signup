import express from 'express'

import albums from './albums'
import authentication from './authentication'
import users from './users'

const routes = express.Router()

routes.use('/', authentication)
routes.use('/albums', albums)
routes.use('/users', users)

export default routes
