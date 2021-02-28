const express = require('express')
const path = require('path')
const cors = require('cors')
const router = require('./routers/index')

require('dotenv').config()
require ('./configs/database')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api',router)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
}

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'
app.listen(port,host,()=>console.log('App Listening'))
