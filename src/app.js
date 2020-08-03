const express = require('express');
const app = express();
const dynamicScreenContr = require('./controller/dynamicScreenController');

//Controllers
app.use('/', dynamicScreenContr);
//End Controllers
app.listen(process.env.PORT || 8000);