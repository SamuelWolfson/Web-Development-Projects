import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
  res.send("<h1>hello</h1>");
});

app.get("/about", (req,res) => {
  res.send("<h1>thats about me</h1>");
});

app.get("/contact", (req,res) => {
  res.send("<h1>thats me contact</h1>");
});

app.listen(port, () =>
{
  console.log(`app is running on port ${port}`);
});