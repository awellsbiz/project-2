// require packages
require('dotenv').config()
const express = require('express')

//app configs 
const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine', 'ejs')

//middlewares
//parse html from request bodies
app.use(express.urlencoded({extended:false}))

//routes and controllers
app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.use('/user', require('./controllers/users.js'))

//listen on a port
app.listen(PORT, () => {
    console.log(`authenticating user on ${PORT}`)
})