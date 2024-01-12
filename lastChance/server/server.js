const express = require("express");
const cors = require("cors");
const app = express();
const multer = require('multer');
const path = require('path');


const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433
});

const Image = sequelize.define('tbl_product', {
  image: {
    type: DataTypes.BLOB
  },
  img_name: {
    type: DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING
  }
});

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { filename, path } = req.file;
    const name = req.body.name; 

    const image = await Image.create({ name, path });
    res.json({ success: true, image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});



app.post("/product/create", function (req, res) {

});


app.get("/product/search", function (req, res) {

});

app.listen(3000, () => console.log("Example app is listening on port 3000."));



