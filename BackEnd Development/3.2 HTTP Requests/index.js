import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1 style='color:red'>Hello World</h1>");
})

app.get("/About", (req, res) => {
    res.send("<h1 style='color:Blue'>It's Samski</h1>");
})

app.get("/Contact", (req, res) => {
    res.send("<h1 style='color:green'>My Phone Number is : ...... still trying to figure put</h1>");
})

app.listen(port,() =>{
    console.log(`The server is now up and running on port : ${port}`);
});