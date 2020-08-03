const express = require('express');
const app = express();
const dynamicScrBll = require('../bll/dynamicScreenBll');

app.get('/get_meta_data/:moduleName/:screenName', function (req, res) {
    dynamicScrBll.dynamicScreenConfigReader(req, res);
});

module.exports = app;