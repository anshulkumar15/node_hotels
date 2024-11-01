const express = require("express");
const router = express.Router();
const Person = require("./../models/Person.js");
const { json } = require("body-parser");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    //create a person data
    const newPerson = new Person(data);
    //save person in db
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

//get metthod to get person info
router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    console.log("data fetched");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extearxt worktype
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json("Internel errror");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internel errror' });
  }
});


router.delete('/:id', async (req, res) => {
	try {
	const personId = req.params.id; // Extract the person's ID from the URL parameter
	
	// Assuming you have a Person model
	const response = await Person.findByIdAndDelete(personId);
	if (!response ) {
	return res.status(404).json({ error: 'Person not found' });
	}

	console.log("data deleted")
	// Send a success message as a JSON response
	res.status(200).json({message:'person deleted sucessfully'});
	} catch (error) {
	console.error('Error deleting person:', error);
	res.status(500).json({ error: 'Internal server error' });
	}
	});
module.exports = router;
