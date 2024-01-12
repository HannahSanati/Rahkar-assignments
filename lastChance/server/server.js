const express = require("express");
const cors = require("cors");

const imageRouter = require("./routes/image.route");

const PORT = 4000;

app = express();
app.use(express.json());
app.use(cors());
app.use("/api", imageRouter);

app.listen(PORT, () => {
  console.log("it's working!");
});
