const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose
  .connect('mongodb://localhost:27017/Nodejs', {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log('Error ao conectar ao MongoDB');
    console.log(error);
  });

  require('./src/models/Product');


app.get('/', (req, res) => {
    res.send('Primeira pag');
})

app.listen(3002);
