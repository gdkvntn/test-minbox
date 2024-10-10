import { Box, Checkbox, Text } from "@chakra-ui/react";
import { Todo } from "../model/types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => (
  <Box as="li" borderBottom="1px" py="1">
    <Checkbox
      borderColor="blue.600"
      isChecked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    >
      <Text textAlign="center" as={todo.completed ? "del" : undefined}>
        {todo.title}
      </Text>
    </Checkbox>
  </Box>
);
