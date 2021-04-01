const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const findOne = require('../models/User')
const jwt = require('jsonwebtoken')

const userControllers = {
    signUp: async (req,res) =>{
        var errores = []
        const {name,lastName,email,password} = req.body
        const userExists = await User.findOne({email : email})
        if(userExists){
            errores.push('Usted ya se encuentra registrado')
        }
        if (errores.length === 0){
            const passwordHash = bcryptjs.hashSync(password,10)
            var newUser = new User({
                name,
                lastName,
                email,
                password:passwordHash
            })
            var newUserSave = await newUser.save()
            var token = jwt.sign({
                ...newUserSave
            },process.env.SECRET_KEY,{})
        }
        console.log(newUser)
        return res.json({
            success:errores.length === 0 ? true : false,
            errores:errores,
            respuesta:errores.length === 0 && {token,name: newUserSave.name}
        })
    },
    signIn: async(req,res) =>{
        const {email, password} = req.body
        const userExists = await User.findOne({email:email})
        if(!userExists){
            return res.json({success: false, mensaje:'Usuario no registrado'})
        }
        const passwordMatch = bcryptjs.compareSync(password,userExists.password)
        if(!passwordMatch){
            return res.json({success:false, mensaje:'Usuario o contraseña incorrectos'})
        }
        var token = jwt.sign({...userExists},process.env.SECRET_KEY,{})
        return res.json({success:true, respuesta:{token, name:userExists.name} })
    },
    logFromLS: (req,res,next) =>{
        res.json({success:true, respuesta:{token:req.body.token, name:req.user.name} })
    }
}
module.exports = userControllers