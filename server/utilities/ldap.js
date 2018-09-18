const AD = require('ad');
const config = require('../config/ldap.js');

module.exports = () => {
    return new AD(config);
}