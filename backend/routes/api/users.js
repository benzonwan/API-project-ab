const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const e = require('express');

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
router.post(
  '/',
  validateSignup,
  async (req, res, next) => {
    const { email, password, username, firstName, lastName } = req.body;

    let emailExists = User.findOne({
      where: {
        email: email
      }
    })

    let usernameExists = User.findOne({
      where: {
        username: username
      }
    })
    if (emailExists===email) {
      res.status(403);
      return res.json({
        message: "User already exists",
        statusCode: 403,
        errors: {
          email: "User with that email already exists"
        },
      });
    }
    else if (usernameExists===username) {
      res.status(403);
      return res.json({
        message: "User already exists",
        statusCode: 403,
        errors: {
          username: "User with that username already exists"
        },
      });
    }
    
    
      const user = await User.signup({
        email,
        password,
        username,
        firstName,
        lastName,
      });
    await setTokenCookie(res, user);
    
    return res.json({
      user: user,
    });


 
     
    })
      

      
      module.exports = router;
  