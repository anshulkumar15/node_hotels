const mongoose=require('mongoose');
require('dotenv').config();


// const mongoURL='mongodb://localhost:27017/hotels';
// const mongoURL=process.env.MONGODB_URL_LOCAL;
const mongoURL=process.env.MONGODB_URL;


//setup mongo connection 
mongoose.connect(mongoURL,{
	useNewUrlParser:true,
	useUnifiedTopology:true
})

const db=mongoose.connection;


//event listerner
db.on('connected',()=>{
	console.log("connnected to MongoDB server");
})
db.on('disconnected',()=>{
	console.log("disconnnected to MongoDB server");
})
db.on('error',()=>{
	console.log(" MongoDB server connection error");
})
//exports

module.exports=db;
