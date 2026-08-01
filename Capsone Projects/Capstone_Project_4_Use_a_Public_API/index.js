import express from "express";
import axios from "axios"

const app = express();
const RandomCatFactURL = "https://catfact.ninja/fact?max_length=60";
const RandomCatImageURL = "https://api.thecatapi.com/v1/images/search";
const port = 3000;

app.use(express.static("public"));

app.get("/", async(req, res)=>{
    try{
        const RandomCatFactResult = await axios.get(RandomCatFactURL);
        const RandomCatImageURL2 = await axios.get(RandomCatImageURL);
        const RandomCatImageURL3 = RandomCatImageURL2.data[0].url;
        res.render("index.ejs", {
            randomCatFact: RandomCatFactResult.data.fact,
            randomCatFactLength: RandomCatFactResult.data.length,
            randomCatImage: RandomCatImageURL3,
        });
    } catch (error) {
        console.log(error.RandomCatFactResult.data);
        res.status(500);
    }
});

app.get("/new-cat", async (req, res) => {
  try {
    const factRes = await axios.get(RandomCatFactURL);
    const imgRes = await axios.get(RandomCatImageURL);

    res.json({
      fact: factRes.data.fact,
      length: factRes.data.length,
      image: imgRes.data[0].url
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cat data" });
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, ()=>
     console.log(`Server is running successfully on port ${port}`
     ));