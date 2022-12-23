const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

// Sign up
router.post('/', validateSignup, async (req, res, next) => {
    const { firstName, lastName, email, password, username } = req.body;

  const emailExists = await User.findOne({
    attributes: ['email'],
    where: {
      email: email
    }
  });
  
  const usernameExists = await User.findOne({
    attributes: ['username'],
    where: {
      username: username
    }
  })

  if (emailExists) {
    res.status(403);
    return res.json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": { "email":"User with that email already exists"}
    })
  }
  if (usernameExists) {
    res.status(403);
    return res.json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": { "username": "User with that username already exists" }
    })
  }
    try {
      const user = await User.signup({ email, firstName, lastName, password, username });
      await setTokenCookie(res, user);

      return res.json({ user });
    } catch (err) {
      err.status = 400;
      next(err);
    }
});
  
router.get('/', async (req, res) => {
  let users = [];

  users = await User.findAll();
  res.json(users);
})
  
module.exports = router;