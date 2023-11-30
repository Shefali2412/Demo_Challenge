const express = require('express');
const app = express();
const router = require('./config/router')
const punycode = require('punycode');
//const punycode = require('@sinonjs/commons/punycode');
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended:true})) // to use req.body which will send title & value

// require mongoose
require('./config/mongoose')

// require router
app.use(router)


app.listen(3000);

