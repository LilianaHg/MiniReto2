const express = require("express");

const bodyParser = require("body-parser");

const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

const exp = require("constants");

const mysql = require("mysql");
const { error } = require("console");

app.use(bodyParser.json)

/ server/index.js
const path = require('path');
// Esto hace que NodeJS sirva los archivos resultado del build de ReactJS
// Esto va antes de nuestros endpoints pero después de la declaración de app.
app.use( express.static( path.resolve( __dirname, '../client/build')));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get('*', (req, res) => {
res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
});


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

app.get("/api/serums",(req,res)=>{
    connection.connect();
    connection.query("SELECT nombre FROM serums", function (error,results){
        if(error) throw error;
        res.send(results);
    })
});
app.get("/api/cremas",(req,res)=>{
    connection.connect();
    connection.query("SELECT nombre FROM cremas", function (error,results){
        if(error) throw error;
        res.send(results);
    })
});
app.get("/api/limpiadores",(req,res)=>{
    connection.connect();
    connection.query("SELECT nombre FROM limpiadores", function (error,results){
        if(error) throw error;
        res.send(results);
    })
});
app.get("/api/mascarillas",(req,res)=>{
    connection.connect();
    connection.query("SELECT nombre FROM mascarillas", function (error,results){
        if(error) throw error;
        res.send(results);
    })
});

app.get("/api/tonicos",(req,res)=>{
    connection.connect();
    connection.query("SELECT nombre FROM tonicos", function (error,results){
        if(error) throw error;
        res.send(results);
    })
});

app.post("/appi/compra",(req, res) => {
    connection.connect();
    
});