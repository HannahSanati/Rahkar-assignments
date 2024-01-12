
const Image=require("../models/image")
exports.getTestData = async (req, res) => {
    console.log(req);
    try {
    let data=await Image.create({
        image: req.body.image,
        img_name: req.body.img_name,
        description: req.body.description,
        // createdAt:new Date(),
        // updatedAt:new Date(),

      });
      let cannotFind=await Image.findAll()
    console.log(data);
      res.json(cannotFind,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  