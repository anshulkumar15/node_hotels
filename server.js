const express = require('express')
const app = express();
const db=require('./db');
require('dotenv').config();

const PORT=process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body




app.get('/', function (req, res) {
  res.send('Welcome to my hotel ..HOw are you guys')
})




const personRoutes=require('./routes/personRoutes.js');
app.use('/person',personRoutes);
const menuItemRoutes=require('./routes/menuItemRoutes.js');
app.use('/menu',menuItemRoutes);



app.listen(PORT,()=>{
	console.log("listeing on port  3000")
})