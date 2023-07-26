import express from "express";
import d from "debug";
import helmet from "helmet";
import home from "./routes/home";

const app = express();
const debug = d("index");

app.use(helmet());
app.use("/", home);

const port = process.env.PORT || 3000;

app.listen(port, () => debug(`Server start listening on port ${port}...`));
