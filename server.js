const express = require('express');
const path = require('path');
const app = express();

const port = 4700;


//setting build file path
app.use(express.static(path.join(__dirname,"app/build")));

//redirecting other links back to index.html
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,"app/build/index.html"));
})

app.listen(port,()=>{
    console.log("server is running now!");
})