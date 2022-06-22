import { Router } from "express";
import todoController from "./controller/todoController";

export default () => {
  const app = Router();
  todoController(app);
  // WokerController(app);

  return app;
};
