const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const dynamicScreenContr = require('./controller/dynamicScreenController');

app.get('/',(req,res)=>{
    res.status(200).send("Hello");
})
//Controllers
app.use('/api', dynamicScreenContr);
//End Controllers
app.listen(port, ()=>{
    console.log("App listening on the port : "+port);
});