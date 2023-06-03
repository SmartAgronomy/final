const express = require('express');
const router = express.Router();
const { signup, login, profile, addToCart, getCart, removeFromCart } = require('../controller/userController');
const { verifyToken } = require('../middlewares/authuser');

// Signup endpoint
router.post('/signup', signup);

// Login endpoint
router.post('/login', login);

// Profile endpoint
router.get('/profile', verifyToken, profile);

router.post('/addToCart', verifyToken, addToCart);

router.post('/getCart', verifyToken, getCart);

router.post('/removeFromCart', verifyToken, removeFromCart);

module.exports = router;
