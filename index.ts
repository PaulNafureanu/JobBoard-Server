import express from "express";
import d from "debug";
import helmet from "helmet";
import home from "./routes/home";
import scraper from "./scraper/scraper";
import jobs from "./routes/jobs";

const app = express();
const debug = d("index");

app.use(express.json());
// app.use(helmet());
app.use("/", home);
app.use("/scraper", scraper);
app.use("/jobs", jobs);

const port = process.env.PORT || 3000;

app.listen(port, () => debug(`Server start listening on port ${port}...`));
