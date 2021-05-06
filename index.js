const express = require('express')
const app = express()

app.use('/user',require('./routes/user'))

app.listen(5000, function (){
console.log('server started at port 5000')
})