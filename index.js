const express = require('express')
const app = express();
 const mongoose = require('mongoose')
 const productRouter = require('./router/ProductRoutes')

app.use(express.json())

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://2216122:ThamilarrasiT1920>@mycluster.ibjh8.mongodb.net/?retryWrites=true&w=majority&appName=mycluster')
     .then(()=> console.log('database connected..'))
     .catch((err) => console.log(err))

app.use("", productRouter);

app.get('/', (req, res)=>{
    res.send('server reacted...')
})
console.log("hello");
