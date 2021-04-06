const express = require('express');
const app = express();

const path = require('path');
const puerto = process.env.PORT ;
 

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
  })

  app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
  })
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
  })

  app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});


