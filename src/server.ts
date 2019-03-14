/**
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-form-commonjs-modules-with---esmoduleinterop
 *
 * Should be like:
 *  ``` import * as express from "express"; ```
 * if --esModuleInterop=false
 */
import express from "express";
import { GetIndex, GetQuery } from "./controllers/index";

const app = express();
const PORT = 3000;

app.get("/", GetIndex);
app.get("/query", GetQuery);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});