import Joi from "joi"

export class Validation {
    constructor(){}

    registerScheme = Joi.object({
        username:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
    })

    loginScheme = Joi.object({
        username:Joi.string().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
    })
}

export default new Validation()