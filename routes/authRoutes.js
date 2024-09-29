const { Router } = require('express');
const { signup, login, homepage } = require('../controllers/index');
const auth = require("../middlewares/authMiddleware");

const Routes = Router();

Routes.post('/signup', signup);
Routes.post('/login', login);
Routes.post('/home', auth, homepage);

module.exports = { Routes };
