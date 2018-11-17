// let userController = require('../controllers/user.controller');
let supportController = require('../controllers/support.controller');
let supportValidation = require('../validations/support.validation');
module.exports = (server) => {
    server.post('/support', supportValidation.saveQuery, supportController.saveQuery);
};