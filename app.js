const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const DB = require('./DBConnect');
const dataModel = require('./models/password');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, "Views")))
app.set('views', path.join(__dirname, "Views"))


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.render('index.jade')
})

app.post('/post', (req, res, next) => {
    var data = new dataModel();
    data.email = req.body.email;
    //data.password = req.body.password;
    var salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(req.body.password, salt)
    data.save((err, user) => {
        if (err) {
            throw err;
        } else {
            res.send(`your password is`);
        }
    });
})


app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`server is running...`);
    }
})