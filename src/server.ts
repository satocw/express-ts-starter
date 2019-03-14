import * as express from "express";
import { GetIndex, GetQuery } from "./controllers/index";

const app = express();
const PORT = 3000;

app.get("/", GetIndex);
app.get("/query", GetQuery);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});