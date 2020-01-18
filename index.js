const express = require('express')
const app = express()

// const handlebars = require('express-handlebars')
// Config 
    // Template Engine
    // app.engine('handlebars',handlebars ({ defaultLayout : 'main'}))
    // app.set('view engine','handlebars')

app.use(express.static('public'))
app.get('/',(req,res,next) => {
    res.sendFile(__dirname+"/teste.html")   
})

app.listen(3000)