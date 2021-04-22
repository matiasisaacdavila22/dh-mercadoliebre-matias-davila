const express = require('express');
const app = express();
const rutasMain = require('./routes/mainRouter.js');
const rutasProductos = require('./routes/productRouter.js');
const userRouter = require('./routes/userRouter.js');

app.set('view engine', 'ejs');

const path = require('path');
const puerto = process.env.PORT ;
 
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/', rutasMain);
app.use('/', userRouter);

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});


