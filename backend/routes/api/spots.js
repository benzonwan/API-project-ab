const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Spot } = require("../../db/models");

const router = express.Router();

router.get('/', async (req, res) => {
    let spots = [];
    spots = await Spot.findAll();
    res.json(spots)
})

module.exports = router;