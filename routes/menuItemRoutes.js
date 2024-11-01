const express = require('express');
const router = express.Router();
const MenuItem=require('./../models/menuItem');



router.post('/',async(req,res)=>{

	try {
		const data=req.body;

	//create a person data
	const newMenu=new MenuItem(data);
	//save person in db
	const response=await newMenu.save();
	console.log('data saved');
	res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({error:'Internal server Error'});
	}
	
})


//get metthod to get person info
router.get('/',async(req,res)=>{
	try{
		const response= await MenuItem.find();
		console.log('data fetched');
	res.status(200).json(response);
	}catch(err){
		console.log(err);
		res.status(500).json({error:'Internal server Error'});
	}
})



// router.get('/:workType',async(req,res)=>{
// 	try {
	  
// 	  const workType=req.params.workType;//extearxt worktype
// 	  if(workType=='chef' || workType=='manager'|| workType=='waiter'){
// 		  const response=await Person.find({work:workType});
// 		  console.log('response fetched');
// 		  res.status(200).json(response);
	   
// 	  }else{
// 		  res.status(404).json({error:'Invalid work type'});
// 	  }
// 	} catch (err) {
	  
// 	  console.log(err);
// 		  res.status(200).json('Internel errror');
// 	}
// })
//commnet dded fo tetsing version 
module.exports=router;