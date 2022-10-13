// config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

// forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// rotas da API 
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

  res.json({ message: "Hello Express" })

})


// conexão com o banco + ativando porta 3000
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.40iwgxn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

