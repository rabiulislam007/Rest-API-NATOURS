const express = require('express');
const viewsContoller = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewsContoller.getOverView);
router.get('/tour/:slug', viewsContoller.getTour);
router.get('/login', viewsContoller.getLoginForm);

module.exports = router;
