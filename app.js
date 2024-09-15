const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  const userdata = await userModel.create({
    name: "daniyal",
    username: "sahnwaz786",
    email: "mdsahnwazalam48@gmail.com",
  });
  res.send(userdata);
});

app.get("/read", async (req, res) => {
  const user = await userModel.find({ name: "sahnwaz" });
  res.send(user);
});

app.get('/update', async (req,res)=>{
    const updatedData=await userModel.findOneAndUpdate({name:"daniyal"},{name:"mota"},{new:"true"})
    res.send(updatedData)
})

app.get('/delete', async (req,res)=>{
    const deleted =await userModel.deleteMany({name:"sahnwaz"})
    res.redirect("/read")
})

app.listen(3000);
