
const express = require('express');
const courses = express();
const bodyParser = require('body-parser');

courses.use(bodyParser.json());
courses.use(bodyParser.urlencoded({ extended: false }));

courses.get('/courses/', function (req, res) {
    let data = {
        message: 'Hello World! This is a course'
    };
    res.status(200).send(data);
});

courses.post('/', function (req, res) {
    let data = {
        response: 'You sent: ' + req.body.message + ' to courses'
    };

    res.status(200).send(data);
});

module.exports = courses;
