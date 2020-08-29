const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    app = express(),
    activities = JSON.parse(fs.readFileSync('data/activity.json', 'utf-8')),
    planning = JSON.parse(fs.readFileSync('data/planning.json', 'utf-8')),
    port = 8085;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    next();
});

//Mettre à jour les fichiers users.json
const writeFiles = () => {
    fs.writeFileSync('data/activity.json', JSON.stringify(activities));
    fs.writeFileSync('data/planning.json', JSON.stringify(planning));
}

app.use(express.static(__dirname + '/dist'));

app.get('/GetList', (req, res) => {
    res.json(activities);
})

app.post('/GetPlanning', (req, res) => {
    const data = req.body;
    const result = [];

    planning.forEach(element => {
        if (element.day == data.day) {
            result.push(element);
        }
    });

    res.json(result);
})

//Add new activity
app.post('/AddActivity', (req, res) => {
    const data = req.body;
    activities.push(data);
    writeFiles();
    res.json({error: false});
})

//Add activity => Planning
app.post('/AddPlanning', (req, res) => {
    const data = req.body;
    planning.push(data);
    writeFiles();
    res.json({ error: false });
})


//Delete activity 
app.post('/DeleteActivity', (req, res) => {
    const data = req.body;
    let status = false;

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].id === data.id) {
            activities.splice(i, 1);
            status = true;
            break;
        }
    }

    writeFiles();
    res.json({ status: status });
})


app.listen(port);