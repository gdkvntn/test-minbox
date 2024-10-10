export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  filter: TodoStatus;
  setFilter: React.Dispatch<TodoStatus>;
  clearAllcompleted: () => void;
}

export enum TodoStatus {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
