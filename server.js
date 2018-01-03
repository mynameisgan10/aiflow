const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const app = express();


//connecting to mongoDB server

mongoose.connect('mongodb://localhost:27017/AIFLOW', {
    useMongoClient: true
});

//connection to database was successful
mongoose.connection.on('connected', () => {
    console.log("connected to database");
});

//connection to the server failed

mongoose.connection.on('error', (err) => {
    console.log("database connected error" + err);
});

const port = 4700;

//setting build file path
app.use(express.static(path.join(__dirname, "app/build")));

//setting up routes
app.use('/test',auth);

//redirecting other links back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "app/build/index.html"));
})

app.listen(port, () => {
    console.log("server is running now!");
})