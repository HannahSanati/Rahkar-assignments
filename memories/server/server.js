
const express=require('express');
const cors=require('cors');
const logger=require('./middlewares/logger')
const userRoutes=require('./routes/user');

const app= express();

app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", [logger], (req,res,next) => {
    res.json("hi")
})

app.listen(4000, ()=>{
    console.log("Server listening on port 4000");
});
