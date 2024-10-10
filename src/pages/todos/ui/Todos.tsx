import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { RadioGroupFilter } from "../../../features/todos-filters/ui";
import { TodoInput, TodoList } from "../../../entities/todo";
import { useTodoState } from "../../../entities/todo/hooks/useTodoState";
import { TodoStatus } from "../../../entities/todo/model/types";

export const TodosPage = () => {
  const { todos, toggleTodo, filter, clearAllcompleted } = useTodoState();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case TodoStatus.ALL:
        return todo;
      case TodoStatus.ACTIVE:
        return todo.completed === false;
      case TodoStatus.COMPLETED:
        return todo.completed === true;
      default:
        return;
    }
  });

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Heading mb="20px" as="h1" fontWeight={"thin"}>
        todos
      </Heading>
      <Box position="relative" maxW="500px" w="full">
        <Card boxShadow="dark-lg" zIndex="1">
          <CardHeader>
            <TodoInput />
          </CardHeader>{" "}
          <Divider />
          <CardBody>
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
          </CardBody>
          <Divider />
          <CardFooter display="flex" justifyContent="space-between">
            <span>{todos.length} items left</span>
            <RadioGroupFilter />
            <Button
              onClick={() => clearAllcompleted()}
              variant="ghost"
              size="sm"
            >
              clear all completed
            </Button>
          </CardFooter>
        </Card>
        <Card
          position="absolute"
          bottom="-5px"
          w="full"
          h="40px"
          boxShadow="dark-lg"
          zIndex="0"
        />
        <Card
          position="absolute"
          bottom="-10px"
          w="100%"
          h="40px"
          boxShadow="dark-lg"
          zIndex="-1"
        />
      </Box>
    </Flex>
  );
};
