const fs = require('fs');
const path = require('path');
const constantMsg = require('../config/constants');

module.exports.dynamicScreenConfigReader = function (req, res) {
    let url = req.url.split('/get_meta_data/')[1];
    if (url) {
        if (url.split('/').length !== 2) {
            res.status(500).send('System expects 2 parameters');
            return;
        }
        try {
            res.status(200).send(fs.readFileSync(path.resolve(__dirname, '../../preferences/' + url + '.json'),
                { encoding: 'utf8', flag: 'r' }));
        }
        catch (e) {
            console.log(e);
            res.status(500).send(constantMsg.INVALID_URL);
        }
    } else {
        res.status(500).send(constantMsg.INVALID_URL);

    }

}