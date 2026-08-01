import express from "express";

const app = express();
const port = 3001;
const postsArray =[];

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req,res) => {
res.render("index.ejs")
});
app.get("/about",(req,res) => {
res.render("about.ejs")
});
app.get("/posts",(req,res) => {
res.render("posts.ejs")
});

app.post("/submit",(req,res) => {
    const comment = req.body.userComment;
  if (comment && comment.trim() !== "") {
    postsArray.push(comment);
  }
res.render("posts.ejs",{PostsArray:postsArray})
});

app.post("/delete", (req, res) => {
    const index = parseInt(req.body.index);
    if (!isNaN(index)) {
        postsArray.splice(index, 1);
    }
    res.render("posts.ejs", { PostsArray: postsArray });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
