const { login } = require('./auth/loginInController');
const { signup } = require('./auth/singupController');
const { homepage } = require('./auth/homeController');

module.exports = { login, signup, homepage };
