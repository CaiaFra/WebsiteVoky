const express = require('express');
const cardController = require('../controllers/cards');

const router = express.Router();

router.get('/add-card', cardController.getAddCard);

router.post('/add-card', cardController.postAddCard);

module.exports = router;
