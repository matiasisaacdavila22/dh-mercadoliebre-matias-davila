const express = require('express');
const path = require('path');
 
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');});

router.post('/login', (req, res) => {
    res.render('home');});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    res.render('login');
});

module.exports = router;