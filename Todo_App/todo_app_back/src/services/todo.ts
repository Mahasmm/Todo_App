import { ITodo, ITodoDto } from "./../interfaces/todo";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import Todo from "./../models/todo";

const TodoService = {
  async createTodo(todoDTO: ITodoDto): Promise<{ todoId: string }> {
    const todo = await Todo.create({
      ...todoDTO,
    });

    if (!todo) {
      throw new Error("Todo cannot be created");
    }
    return { todoId: todo._id };
  },

  async getTodo() {
    const todo = await Todo.find();
    if (!todo) {
      throw new Error("Todo cannot get");
    }
    console.log(todo);
    return todo;
  },

  async updateTodo(
    query: FilterQuery<ITodoDto>,
    update: UpdateQuery<ITodoDto>,
    options: QueryOptions
  ) {
    return Todo.findOneAndUpdate(query, update, options);
  },

  async deleteTodo(query: FilterQuery<ITodo>) {
    return Todo.deleteOne(query);
  },
};
export default TodoService;
