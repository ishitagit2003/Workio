const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(1).required(),
    city: Joi.string().required(),
    zipCode: Joi.string().regex(/^\d{5}(-\d{4})?$/).required()
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
};

module.exports = validateUser;
