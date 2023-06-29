const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../app/out')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, '../app/out/index.html')));

app.listen(3080);