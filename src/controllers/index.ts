import { Request, Response } from "express";

const GetGp = (req: Request, res: Response) => {
  res.render('gp');
};
const GetGpOld = (req: Request, res: Response) => {
  res.render('gp_old');
};
const GetComm = (req: Request, res: Response) => {
  res.render('comm');
};
const GetCommOld = (req: Request, res: Response) => {
  res.render('comm_old');
};

export { GetGp, GetGpOld, GetComm, GetCommOld };