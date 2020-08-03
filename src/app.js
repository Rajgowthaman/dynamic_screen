const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const dynamicScreenContr = require('./controller/dynamicScreenController');

//Controllers
app.use('/', dynamicScreenContr);
//End Controllers
app.listen(port, ()=>{
    console.log("App listening on the port : "+port);
});