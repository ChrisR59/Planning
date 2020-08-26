const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    activities = JSON.parse(fs.readFileSync('data/activity.json', 'utf-8')),
    port = 8085;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

//Mettre à jour les fichiers users.json
const writeFiles = () => {
    fs.writeFileSync('data/activity.json', JSON.stringify(activities));
}

app.use(express.static(__dirname + '/dist'));

app.get('/GetList',(req,res) => {
    res.json(activities);
})

//Add new activity
app.post('/AddActivity', (req,res) => {
    const data = req.body;
    activities.push(data);
    writeFiles();
    res.json({error:false});
})

app.listen(port);