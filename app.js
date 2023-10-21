const express = require('express')
const app = express()
const todoRoute = require('./routes/todoRoute.js')
const port = 3000

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))

app.use('/todo', todoRoute)

if (process.env.NODE_ENV != "test"){

    app.listen(port, () =>{
        console.log('Server Running..')
    })
    
}

module.exports = app