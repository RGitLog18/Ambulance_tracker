let express = require("express");
let cors = require("cors");
let { MongoClient, ObjectId } = require("mongodb");
let multer = require("multer");
let cloudinary = require("cloudinary").v2;
let { CloudinaryStorage } = require("multer-storage-cloudinary");

let app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://0.0.0.0:27017";

// Cloudinary config
cloudinary.config({
  cloud_name: "dp5svqc1n",
  api_key: "736295659442531",
  api_secret: "jH-TRd5A65JCoTezD0L7gBfxHPE"
});

// Multer storage for Cloudinary
let storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "hospital_uploads", // Cloudinary folder
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => Date.now() + "-" + file.originalname
  }
});

let upload = multer({ storage: storage });

// Upload route
app.post('/upload', upload.single("file"), async (req, res) => {
  try {
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db("tinder");
    let collec = db.collection("photos");

    let obj = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      occupation: req.body.occupation,
      caption: req.body.caption,
      file_url: req.file.path, // Cloudinary URL
      file_id: req.file.filename || req.file.public_id, // Public ID for deletion
      upload_time: new Date()
    };

    let result = await collec.insertOne(obj);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Upload failed" });
  }
});

// Get all files
app.get("/files", async (req, res) => {
  try {
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db('tinder');
    let collec = db.collection('photos');
    let username = req.query.username;

    let obj = username ? { username } : {};
    let result = await collec.find(obj).toArray();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch files" });
  }
});

// Delete file
app.delete("/delete/:id", async (req, res) => {
  try {
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db('tinder');
    let collec = db.collection('photos');

    let _id = new ObjectId(req.params.id);
    let photo = await collec.findOne({ _id });

    if (photo && photo.file_id) {
      await cloudinary.uploader.destroy(photo.file_id); // Delete from Cloudinary
    }

    let result = await collec.deleteOne({ _id });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Delete failed" });
  }
});

app.listen(3000, () => console.log("Express is Alive"));
