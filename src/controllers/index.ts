import { Request, Response } from "express";

const GetIndex = (req: Request, res: Response) => {
  res.send("Get Index OK");
};

const GetQuery = (req: Request, res: Response) => {
  const params = req.query;
  res.send("Get Query: " + JSON.stringify(params));
};

export { GetIndex, GetQuery };