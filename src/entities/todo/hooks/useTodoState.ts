import { useContext } from "react";
import { TodoContext } from "../model/state";

export const useTodoState = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoState must be used within a TodoProvider");
  }
  return context;
};
