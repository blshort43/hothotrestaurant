// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Star Wars Characters (DATA)
// =============================================================
var customers = [{
    customerName: 'yoda',
    phoneNumber: '1-800-the-jedi',
    customerEmail: 'JediMaster@AOL.com',
    customerId: "Reserve table, you will"
}];

var waiting = [{
    customerName: 'yoda',
    phoneNumber: '1-800-the-jedi',
    customerEmail: 'JediMaster@AOL.com',
    customerId: "Reserve table, you will"
}];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/customers', function(req, res) {
    res.json(customers);
});

// Create New Table - takes in JSON input
app.post('/customers', function(req, res) {
    var newcustomer = req.body;

    console.log(newcustomer);

    customers.push(newcustomer);
    console.log(customers);

    res.json(newcustomer);
});

app.get('/waiting', function(req, res) {
    res.json(waiting);
});

// Create New Table - takes in JSON input
app.post('/waiting', function(req, res) {
    var newcustomer2 = req.body;

    console.log(newcustomer2);

    waiting.push(newcustomer2);
    console.log(waiting);

    res.json(newcustomer2);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
