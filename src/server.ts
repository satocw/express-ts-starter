import express from "express";
import path from "path";
import { GetGp, GetGpOld, GetComm, GetCommOld } from "./controllers/index";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine','pug');

app.get("/", GetGp);
app.get("/gp_old_releases", GetGpOld);
app.get("/comm", GetComm);
app.get("/comm_old_releases", GetCommOld);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});