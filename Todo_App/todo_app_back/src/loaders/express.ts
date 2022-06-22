import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
// import { OpticMiddleware } from '@useoptic/express-middleware';
import config from "../config";
import controller from "./../api";

export default ({ app }: { app: express.Application }) => {
  app.get("/status", (req, res) => {
    console.log("ok");

    res.status(200).end();
  });

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");

  app.use(cors());

  app.use(express.json());

  app.use(config.api.prefix, controller());

  app.use((req, res, next) => {
    const err: any = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
