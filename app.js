const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config')


app.use(bodyParser.json())
const productRoute = require('./routes/productDetails')
app.use('/product', productRoute)

//routes
app.get('/', (req, res) => {
    res.send('Hello !')
});
mongoose
.connect(process.env.DB_CONNECTION,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('connected')
})



app.listen(3005)