import { Request, Response } from "express";

export const GetIndex = (req: Request, res: Response) => {
  res.send("Get Index OK");
};
