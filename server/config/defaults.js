global._ = require('lodash');

module.exports.defaults = {
    hostname:'https://paytron.com.ng',//'http://localhost:4200',
    email: process.env.DEFAULT_EMAIL || 'admin@email.com',
    password: process.env.DEFAULT_PASSWORD || 'admin1234',
    afterEvent: [],
    _hookTimeout: 60000,
    allowUnknownModelDefinitions: false
};
