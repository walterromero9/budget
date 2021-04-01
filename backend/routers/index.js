const express = require('express')
const router = express.Router()
require('dotenv').config()
const userControllers = require('../controllers/userControllers')
const movControllers = require('../controllers/movControllers')
const validator = require('../controllers/validator')
const passport = require('passport')
require('../configs/passport')



router.route('/signin')
.post(userControllers.signIn)
router.route('/signup')
.post(validator.validNew,userControllers.signUp)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userControllers.logFromLS)


router.route('/newMov')
.post(passport.authenticate('jwt', {session: false}),movControllers.addMov)

router.route('/mov/:userId')
.get(passport.authenticate('jwt', {session: false}),movControllers.userMov)

router.route('/mov/:movID')
.delete(movControllers.deleteMov)
router.route('/mov/:id')
.put(movControllers.modifyMov)



module.exports = router