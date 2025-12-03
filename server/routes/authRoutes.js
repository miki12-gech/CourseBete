const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');


router.post('/register', authController.register);
router.post('/login', authController.login);


router.get('/students', auth, authController.getAllStudents);


router.delete('/users/:id', auth, authController.deleteUser);

module.exports = router;