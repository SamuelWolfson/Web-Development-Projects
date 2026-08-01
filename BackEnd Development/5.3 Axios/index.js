import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs");
  }
});
app.post("/", async (req, res) => {
  console.log(req.body);
  const typeOfActivity = req.body.type;
  const participantAmount = req.body.participants;
  try {
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${typeOfActivity}&participants=${participantAmount}`);
    const result = getRandomActivity(response.data);
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { data: null, error: "No activities that match your criteria." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

function getRandomActivity(data) 
{
  const randomNum = Math.floor(Math.random() * data.length)
  const randomActivity = data[randomNum];
  return randomActivity;
}