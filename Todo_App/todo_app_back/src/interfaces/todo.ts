export interface ITodoDto {
  Note: string;
  Desc: string;
}

export interface ITodo extends ITodoDto {
  _id: string;
}
