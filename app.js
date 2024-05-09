const express = require('express')
const app = express()

const dotenv = require("dotenv").config()

app.listen(process.env.PORT, ()=>{
    console.log(`Server started!`)
})

const itemCardRouter = require('./routes/itemCard_route.js')
app.use('/itemCard', itemCardRouter)