// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require("fs");

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});

app.get("/api",(req,res) => {
    res.json({message:"Hello from server side!"});
});

app.get("/api/pet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        console.log( data );
        res.end( data );
    });
});