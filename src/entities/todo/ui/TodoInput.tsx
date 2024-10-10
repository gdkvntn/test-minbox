import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTodoState } from "../hooks/useTodoState";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodoState();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div>
      <Input
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
