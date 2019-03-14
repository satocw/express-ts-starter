import { Request, Response } from "express";

export const GetIndex = (req: Request, res: Response) => {
  res.send("Get Index OK");
};

export const GetQuery = (req: Request, res: Response) => {
  const params = req.query;
  res.send("Get Query: " + JSON.stringify(params));
};
