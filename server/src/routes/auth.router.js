const express = require('express')
const authRouter = express.Router()
const { httpPostSignup } = require('../controllers')

authRouter.post('/',httpPostSignup);

module.exports = authRouter;