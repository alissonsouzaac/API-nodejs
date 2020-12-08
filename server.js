const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

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

  requireDir('./src/models');

  const Product = mongoose.model('Product')

  app.use("/api", require("./src/Routes"));

app.listen(3002, () => console.log('Server aberto na porta 3002'));
