const fs = require('fs');
const path = require('path');
const constantMsg = require('../config/constants');

module.exports.dynamicScreenConfigReader = function (req, res) {
    let moduleName = req.params.moduleName;
    let screenName = req.params.screenName;
    if (moduleName && screenName) {
        try {
            res.status(200).send(fs.readFileSync(path.resolve(__dirname, '../../preferences/' + moduleName+'/'+screenName + '.json'),
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