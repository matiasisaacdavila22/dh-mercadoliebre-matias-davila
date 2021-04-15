const express = require('express');

let rutasMain = require('./routes/main');
let rutasProductos = require('./routes/productos.js');

const app = express();

app.set('view engine', 'ejs');

const path = require('path');
const puerto = process.env.PORT ;
 
app.use(express.static('./public'));

app.use('/', rutasMain);
app.use('/register', rutasMain);
app.use('/login', rutasMain);

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});


