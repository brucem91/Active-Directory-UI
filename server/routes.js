const router = require('express').Router();

router.use('/api/users', require('./controllers/users.controller.js'));

module.exports = router;