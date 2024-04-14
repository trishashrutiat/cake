const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
// MongoDB connection setup
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connect() {
  try {
      await client.connect();
      console.log('Connected to MongoDB server');
  } catch (err) {
      console.error('Error connecting to MongoDB server', err);
      process.exit(1);
  }
}
const { cakes } = require('./cakes');

// Define endpoint to serve the data
app.get('/api/cakes', (req, res) => {
    res.json(cakes);
});

app.get('/insert', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('CAKE_PROJECT');
        const collection=db.collection('customer');
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Inserted Successfully" };
    res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
    res.json(data);
    }
  });


  app.get('/findAll', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('CAKE_PROJECT');
        const collection=db.collection('customer');		
        const result = await collection.find({},{name:1,_id:0,username:1,email:1,phone:1,password:1,gender:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });
  app.get('/delete', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('CAKE_PROJECT');
        const collection=db.collection('customer');
        const result = await collection.deleteOne(req.query);
		if(result.deletedCount>0)
			data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.deletedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "delete action failed" };
		res.json(data);
    }
});

app.get('/update', async function (req, res) {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        const db = client.db('CAKE_PROJECT');
        const collection = db.collection('customer');
        const filter = { email: req.query.email };

        const result = await collection.updateOne(filter, { $set: { password: req.query.password } });

        let data;
        if (result.modifiedCount > 0) {
            data = { status: true, message: "Updated Successfully", noOfDoc: result.modifiedCount };
        } else {
            data = { status: false, message: "No data found", noOfDoc: result.modifiedCount };
        }
        res.json(data);
    } catch (err) {
        console.error('Error ', err);
        const data = { status: false, message: "Update action failed" };
        res.json(data);
    }
});


  app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
	connect(); // Connect to MongoDB when the server starts
});
