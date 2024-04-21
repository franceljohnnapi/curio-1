const express = require('express');
const db = require("./controllers/db");
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv').config();
