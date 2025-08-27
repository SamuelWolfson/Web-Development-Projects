import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const date = new Date("August 30, 2025 23:15:30");
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = date.getDay();
const dayOfTheWeek = weekDays[day];
var action = "";

function whatActionIsToday(){
    if(day <=1){
    action = "Party the Start of a new week!";
    }else {if(day <=3)
    action = "Relax in the Middle of a beautifull journey!";
    else {if (day<=6)
        action = "Its the end of the week go move your Changa!";
    }
}
}

app.use(bodyParser.urlencoded({ extended : true }));
whatActionIsToday();
console.log(action)

app.get("/", (req, res) => {
        res.render("views.ejs",
            {
                dayOfTheWeek: dayOfTheWeek,
                action: action
            }
        );
});

app.listen(port, () =>{
    console.log(`port num #${port} is up and running!`)
});