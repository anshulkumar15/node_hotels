const mongoose=require('mongoose');


const mongoURL='mongodb://localhost:27017/hotels';


//setup mongo connection 
mongoose.connect(mongoURL,{
	useNewUrlParser:true,
	useUnifiedTopology:true
})

const db=mongoose.connection;


//event listerner
db.on('connected',()=>{
	console.log("connnected tp MongoDB server");
})
db.on('disconnected',()=>{
	console.log("disconnnected to MongoDB server");
})
db.on('error',()=>{
	console.log(" MongoDB server connection error");
})
//exports

module.exports=db;
