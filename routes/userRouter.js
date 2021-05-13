
const express = require('express');
const path = require('path');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/register', userController.create);
router.post('/register', userController.store); 

router.get('/login', userController.login); 

router.get('/list', userController.list); 

router.get('/search', userController.search); 

router.get('/edit/:id', userController.edit);
router.put('/edit', userController.update);

router.delete('/delete/:id', userController.delete);


module.exports = router;