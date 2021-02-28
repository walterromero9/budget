const express = require('express')
const cors = require('cors')
const router = require('./routers/index')

require('dotenv').config()
require ('./configs/database')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)

app.listen(4000,()=>console.log('App Listening on port 4000'))
