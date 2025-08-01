const express= require("express");
const cors=require("cors");
const {MongoClient} =require("mongodb");

const app=express();

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['POST', 'GET'],
    credentials:true
}));

app.use(express.json());

const url="mongodb+srv://rajeedandge444:dasrOzyVCeuW051N@cluster0.cl1dbzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.post("/add",async(req,res)=>{
    const client=new MongoCLient(url);
    try{
        await client.connect();
        const db=client.db("mongotrial");
        const coll=db.collection("events");

        const obj={
            name:req.body.name,
            address:req.body.addr,
            emergencyType:req.body.emergencyType,
            phone:req.body.phone
        };

        await coll.insertOne(obj);
        res.send("Data inserted successfully");

    }catch (err) {
        console.error("Insert error:", err);
        res.status(500).send("Error inserting data");
    } finally {
        await client.close();
    }
});

app.get("/get", async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db("mongotrial");
    const coll = db.collection("events");

    const data = await coll.find().toArray();
    res.send(data);
  }catch (err) {
        console.error("Fetch error:", err);
        res.status(500).send("Error fetching data");
    } finally {
        await client.close();
    }
});


app.listen(9000,()=>{
    console.log("Server is alive!");
})