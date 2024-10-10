import { Box } from "@chakra-ui/react";
import { Todo } from "../model/types";
import { TodoItem } from "./Todo";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <Box as="ul" h="100px" overflow="auto">
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            );
          })
        : "the list is empty"}
    </Box>
  );
};
