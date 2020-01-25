const express = require('express');

const cryptoController = require('./controller.js');

const router = express.Router();

// login router 
router.get('/login', cryptoController.login, (req, res) => res.status(200).json(res.locals));

// market router
router.get('/market', cryptoController.getMarket, (req, res) => res.status(200).json(res.locals));

// limit router
router.get('/limit', cryptoController.getLimit, (req, res) => res.status(200).json(res.locals));





module.exports = router;