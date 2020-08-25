const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    calendar = JSON.parse(fs.readFileSync('data/activity.json', 'utf-8')),
    port = 8085;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port);