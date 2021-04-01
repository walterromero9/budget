const Joi = require('joi')

const validator = {
    validNew: (req, res, next)=>{
        const schema = Joi.object({
            email: Joi.string().trim().required().email({tlds: {allow: false}}),
            lastName: Joi.string().trim().required().min(2),
            password: Joi.string().trim().required().pattern(/^[a-zA-Z0-9]{3,30}$/),
            name: Joi.string().trim().required().min(2),
        })
        const validation = schema.validate(req.body, {abortEarly: false})
        if(!validation.error){
            next()
        } else{
            res.json({success: false ,error:"Error de registro"})
        }
    },
    isAdmin: (req,res,next) =>{
        if(req.user.rol === 'admin'){
            next()
        } else{
            res.json({success: false, mensaje: 'Permisos unicamente para administrador'})
        }
    }
    
}

module.exports = validator
