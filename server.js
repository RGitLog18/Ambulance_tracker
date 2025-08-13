const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Needed for form-data text fields

// MongoDB connection (Change for production)
const url = process.env.MONGO_URL || "mongodb+srv://rajeedandge444:PNzwy19r3iM1qEZ8@cluster0.mfaavun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Cloudinary config (use env variables on Render)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dp5svqc1n",
  api_key: process.env.CLOUD_KEY || "736295659442531",
  api_secret: process.env.CLOUD_SECRET || "jH-TRd5A65JCoTezD0L7gBfxHPE",
});

// Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "hospital_uploads",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const client = new MongoClient(url);
    await client.connect();
    const db = client.db("tinder");
    const collec = db.collection("photos");

    const obj = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      occupation: req.body.occupation,
      caption: req.body.caption,
      file_url: req.file.path, // Cloudinary file URL
      file_id: req.file.filename || req.file.public_id,
      upload_time: new Date(),
    };

    const result = await collec.insertOne(obj);

    await client.close();

    res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

// For Render deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// pswd:PNzwy19r3iM1qEZ8
