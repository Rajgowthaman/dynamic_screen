const path = require('path');
const constantMsg = require('../config/constants');

module.exports.dynamicScreenConfigReader = function (req, res) {
    let moduleName = req.params.moduleName;
    let screenName = req.params.screenName;
    if (moduleName && screenName) {
        try {
            //Using require instead of fs npm
            res.status(200).send(require(`../../preferences/${moduleName}/${screenName}.json`));
        }
        catch (e) {
            console.log(`Requested File/Module Not Found:${e}`);
            res.status(500).send(constantMsg.INVALID_URL);
        }
    } else {
        res.status(500).send(constantMsg.INVALID_URL);

    }

}