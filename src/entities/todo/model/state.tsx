import { createContext, useState } from "react";
import { Todo, TodoContextType, TodoStatus } from "./types";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoStatus>(TodoStatus.ALL);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  const clearAllcompleted = () => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.completed != true);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        filter,
        setFilter,
        clearAllcompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
