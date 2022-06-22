import { NextFunction, Request, Response, Router } from "express";
import { ITodoDto } from "./../../interfaces/todo";
import TodoValidation from "./../../validations/todo";
import TodoService from "./../../services/todo";

const route = Router();

export default (app: Router) => {
  app.use("/todo", route);

  route.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await TodoValidation.validateAsync(req.body);
      const { todoId } = await TodoService.createTodo(req.body as ITodoDto);
      return res.status(201).json(todoId);
    } catch (e) {
      console.log("error", e);
      return next(e);
    }
  });

  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const data = await TodoService.getTodo();
    return res.status(201).json(data);
  });

  route.patch(
    "/:_todoId",
    async (req: Request, res: Response, next: NextFunction) => {
      const _id = req.params._todoId;
      const update = req.body;

      try {
        const data = await TodoService.updateTodo({ _id }, update, {
          new: true,
        });
        return res.status(201).json({ data });
      } catch (e) {
        console.log("error", e);
        return next(e);
      }
    }
  );

  route.delete(
    "/:_todoId",
    async (req: Request, res: Response, next: NextFunction) => {
      const _id = req.params._todoId;
      try {
        await TodoService.deleteTodo({ _id });
        return res.status(201).json("successfuly removed");
      } catch (e) {
        console.log("error", e);
        return next(e);
      }
    }
  );
};
