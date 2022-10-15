const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

// Verbos HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atulizar dados de um Resource
// DELETE: Deletar um Resource


app.get("/clients", (req,res) => {
  res.json(data)
})


app.get("/clients/:id", (req,res) => {
  const {id} = req.params
  const client = data.find(cli => cli.id == id )

  if(!client) return res.status(204).json();

  res.json(client)
}) //Um único client



app.post("/clients", (req,res) => {

  const {name, email} = req.body;

  res.status(201).json({name, email});
})


app.put("/clients/:id", (req,res) => {

  const {id} = req.params;
  const client = data.find(cli => cli.id = id);

  if (!client) return res.status(204).json();

  const {name} = req.body;

  client.name = name;

  res.json(client);

})


app.delete("/clients/:id", (req,res) => {
  const {id} = req.params;
  const clientsFiltered = data.filter(client => client.id != id)

  res.json(clientsFiltered)
})



app.listen(3000, function() {
  console.log(
    "Server is running"
  );
})