import mongoose from "mongoose";
import { ITodoDto, ITodo } from "./../interfaces/todo";

const Todo = new mongoose.Schema(
  {
    Note: {
      type: String,
    },

    Desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITodoDto>("ITodo", Todo, "todo");
