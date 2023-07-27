import express from "express";
import home from "./../routes/home";
import jobs from "./../routes/jobs";
import scraper from "./../scraper/scraper";

const app = express();

app.use("/api", home);
app.use("/api/jobs", jobs);
app.use("/api/scraper", scraper);

export default app;
