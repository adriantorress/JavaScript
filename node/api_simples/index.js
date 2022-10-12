const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function (req, res) {

  res.status(200).json({ allStart: "Hello World" });

})

router.get('/about', function (req, res) {

  res.status(200).json({ sobre: "Primeira api com node, bem básica" });

})

app.use('/', router);

app.listen(process.env.port || 3000);

console.log("Server rodando")