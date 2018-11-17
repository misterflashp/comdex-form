let joi = require('joi');

let saveQuery = (req, res, next) => {
    let saveQuerySchema = joi.object().keys({
        name: joi.string().required(),
        email: joi.string().required(),
        phone: joi.string().required(),
        message: joi.string().required(),
        company: joi.string().required()
    });
    let {
        error
    } = joi.validate(req.body, saveQuerySchema);
    if (error) res.status(422).send({
        success: false,
        error
    });
    else next();
};

module.exports = {
    saveQuery
};