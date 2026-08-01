import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url"
import { dirname } from "path";
import morgan from "morgan";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(morgan("short"));
app.use(bodyParser.urlencoded({exteded:true}));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
