import express from "express";
const app = express();
const port = 3000;

const currentDate = new Date();
const currentDayOfWeekNum = currentDate.getDay(); 
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const currentDayOfWeekName = week[currentDayOfWeekNum];
const message = currentDayOfWeekNum>3?"it's time to have Fun":"it's time to workwork work work work";

app.get("/", (req,res) => {
    res.render("index.ejs", {currentDayOfWeekName: currentDayOfWeekName,
        message:message
    })
});



app.listen(port, ()=> {
    console.log(`app is running on port ${port}`);
});

