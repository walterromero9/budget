const express = require('express')
const cors = require('cors')
const router = require('./routers/index')

require('dotenv').config()
require ('./configs/database')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'
app.listen(port,host,()=>console.log('App Listening on port 4000'))
