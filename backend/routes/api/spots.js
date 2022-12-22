const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Spot } = require("../../db/models");

const router = express.Router();

router.get('/current', requireAuth, async (req, res) => {
    const currSpots = await Spot.findAll({
        where: { ownerId: req.user.id }

    });
    res.json(currSpots);
})

router.get('/:spotId', async (req, res) => {
    
})

router.get('/', async (req, res) => {
    let spots = [];
    spots = await Spot.findAll();
    res.json(spots)
})

module.exports = router;