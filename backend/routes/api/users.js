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
  check('firstName')
      .isLength({ min: 1 })
      .withMessage("First Name is required"),
  check('lastName')
      .isLength({ min: 1 })
      .withMessage("Last Name is required"),
    handleValidationErrors
  ];

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res, next) => {
    // try {
      const { email, password, username, firstName, lastName } = req.body;
  
      // const emailExists = await User.findAll({
      //   attributes: ['email'],
      //   where: {
      //     email: email
      //   }
      // })

      // const userExists = await User.findAll({
      //   attributes: ['username'],
      //   where: {
      //     username: username
      //   }
      // })
      // if (emailExists) {
      //   const err = new Error("User already exists")
      //   err.status = 403,
      //     err.errors = { email: "User with that email already exists" }
      //   res.json({
      //     message: "User already exists",
      //     statusCode: 403,
      //     errors: {
      //       email: "User with that email already exists",
      //     },
      //   });
      //    next(err)
      // } else if (userExists) {
      //   const err = new Error("User already exists");
      //   err.status = 403,
      //   err.errors = { username: "User with that username already exists" }
      //   res.json({
      //     message: "User already exists",
      //     statusCode: 403,
      //     errors: {
      //       username: "User with that username already exists"
      //     }
      //   });
      //   next(err);
      // } else {
        const user = await User.signup({
          email,
          password,
          username,
          firstName,
          lastName,
        });
        await setTokenCookie(res, user);
        // const id = req.user.id;
        res.json({  firstName, lastName, email, username });
      }
    //   } catch (err) {
    //   next(err)
    // }
  
)

  
  
router.get('/', async (req, res) => {
  let users = [];

  users = await User.findAll();
  res.json(users);
  // const pet = await User.findByPk(5)
  // pet.destroy();

})
  
module.exports = router;
    // const emailExists = await User.findOne({
    //   attributes: ['email'],
    //   where: {
    //     email: email
    //   }
    // })

    // const userExists = await User.findOne({
    //   attributes: ['username'],
    //   where: {
    //     username: username
    //   }
    // })
    // if (emailExists) {
    //   res.status(403);
    //   res.json({
    //     "message": "User already exists",
    //     "statusCode": 403,
    //     "error": {
    //       "email": "User with that email already exists"
    //     }
    //   })
    // } else if (userExists) {
      
    //   res.json(userExists);
    //   next({
    //     message: "User already exists",
    //     statusCode: 403,
    //     errors: {
    //       username: "User with that username already exists",
    //     },
    //   });
    //   }
    //  else {
    //   const user = await User.signup({ email, username, password, firstName, lastName });

    //   await setTokenCookie(res, user);
    //   const id = req.user.id;

    //   return res.json({
        
    //       id, firstName, lastName, email,username,
        
    //   });
    // }
  // });