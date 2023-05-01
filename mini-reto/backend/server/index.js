const express = require("express");

const bodyParser = require("body-parser");

const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

const exp = require("constants");

const mysql = require("mysql");
const { error } = require("console");

app.use(bodyParser.json)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Usuario1',
    password: '1234',
    database: 'skincare'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
    if(error) throw error;
    console.log('The solution is: ', results[0].solution);
});