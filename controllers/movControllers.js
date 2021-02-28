const Movements = require('../models/Movements')
const jwt = require('jsonwebtoken')
const movControllers = {
    // Agregar Movimiento
    addMov: (req,res, next) =>{
        const userId = req.user._id
        const {concept,amount,date,type} = req.body
        const newMov = new Movements ({concept,amount,date,type,userId})
        console.log(newMov)
        newMov.save((error, mov) => {
            return res.json({success: !error ? true : false, error, mov})
        })
    },
    // Obtener Movimientos por userId
    userMov: async (req,res, next) =>{
        const userId = req.user._id
        var userMovs = await Movements.find({userId})
        .then(respuesta => res.json({success: true,respuesta}))
        .catch(error => res.json({success:false,error}))
    },
    // Borrar Movimiento
    deleteMov: async (req,res,next) =>{
        const {movID} = req.params
        
        Movements.findByIdAndRemove({_id:movID})
        .then(response=> res.json({succes:true, response}))
        
        .catch(error => res.json({succes: false, error}))
        
    },
    modifyMov: async(req,res,next) =>{
        
        const {id} = req.params
        const {concept,amount,date} = req.body
         await Movements.findOneAndUpdate({_id:id},{concept,amount,date},{ new: true})
        
        .then(newEdited=> res.json({succes:true, response:newEdited,}))
        .catch(error => res.json({succes: false, error}))
    },

}
module.exports = movControllers