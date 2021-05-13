
const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/user'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'user-'+Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({storage: storage});

router.get('/register', userController.register);
router.post('/register', upload.single('file'), userController.create); 

router.get('/login', userController.login); 

router.get('/list', userController.list); 

router.get('/search', userController.search); 

router.get('/edit/:id', userController.edit);
router.put('/edit', userController.update);

router.delete('/delete/:id', userController.delete);


module.exports = router;