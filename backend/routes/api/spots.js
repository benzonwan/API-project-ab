const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Spot } = require("../../db/models");

const router = express.Router();

router.get('/current', requireAuth, async (req, res) => {
    const ownerId = req.user.id
    const spots = await Spot.findAll({
        where: ownerId,
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price',
        'price','createdAt','updatedAt','avgRating','previewImage']
    })
    return res.json({spots})
})

router.get('/:spotId', async (req, res) => {
    const spotId = await Spot.findByPk(req.params.spotId);

    
    if (!spotId) {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
})
router.get('/', async (req, res) => {
    let spots = [];
    spots = await Spot.findAll();
    res.json(spots)
})

module.exports = router;