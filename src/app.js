const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const dynamicScreenContr = require('./controller/dynamicScreenController');
const constantMsg = require('./config/constants');

app.get('/',(req,res)=>{
    res.status(200).send("Hello");
})
//Controllers
app.use('/', dynamicScreenContr);
//End Controllers

app.get('*', (req,res)=>{
    res.status(404).send(constantMsg.INVALID_URL);
})
app.listen(port, ()=>{
    console.log("App listening on the port : "+port);
});