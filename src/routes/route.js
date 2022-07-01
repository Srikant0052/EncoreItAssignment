const express = require('express');
const router = express.Router();
const userControoler = require('../controller/userController');
const { auth1, auth2 } = require('../middleware/auth');

router.post('/users', auth1, userControoler.createUser);
router.post('/login', userControoler.userLogin);
router.get('/users', auth2, userControoler.userList);


module.exports = router;