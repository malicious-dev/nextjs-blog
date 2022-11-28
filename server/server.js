require("dotenv").config();

const express = require('express');
const cors = require('cors');
require('./db/conn');

const app = express();
var port = process.env.PORT || 8000;;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome!!")
})


app.listen(port, ()=>{
  console.log(`server is started at ${port}`);
})