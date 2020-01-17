const express = require('express')
const app = express()

app.get('/',(req,res,next) => {
    res.sendFile(__dirname+'/front-end/index.html')
})

app.listen(3000)