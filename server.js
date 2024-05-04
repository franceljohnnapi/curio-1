const express = require('express');
const db = require("./controllers/db");
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT_NAME
const axios = require('axios');

app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
  });

app.listen(process.env.PORT, () => {
    console.log(`Server listening on localhost:${process.env.PORT_NAME}`);
});