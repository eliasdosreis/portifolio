const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()

// const handlebars = require('express-handlebars')
// Config 
    // Template Engine
    // app.engine('handlebars',handlebars ({ defaultLayout : 'main'}))
    // app.set('view engine','handlebars')

app.use(express.static('public'))


var options = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
};


app.get('/',(req,res,next) => {
    res.sendFile(__dirname+"/index.html")   
})

app.listen(3001)

// https.createServer(app).listen(8082)

https.createServer(options,app).listen(3000,() => {
    console.log('HTTPS listening on 3000')
})
