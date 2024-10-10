import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTodoState } from "../src/entities/todo/hooks/useTodoState";
import { TodoProvider } from "../src/entities/todo";

const TestComponent = () => {
  const { todos, addTodo, toggleTodo, clearAllcompleted } = useTodoState();
  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <button onClick={clearAllcompleted}>Clear Completed</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe("TodoProvider", () => {
  test("should add a new todo", () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );
    // Создаем новую задачу
    fireEvent.click(screen.getByText("Add Todo"));

    // Проверяем создание новой задачи
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("should toggle todo completion", () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );
    // Создаем новую задачу
    fireEvent.click(screen.getByText("Add Todo"));

    // Проверяем создание новой задачи
    const todoItem = screen.getByText("New Todo");
    expect(todoItem).toBeInTheDocument();

    // Отмечаем задачу как выполненную
    fireEvent.click(screen.getByText("Complete"));

    // Проверяем, что задача отмечена как выполненная
    expect(todoItem).toHaveTextContent("Undo");

    // Отменяем выполнение задачи
    fireEvent.click(screen.getByText("Undo"));

    // Проверяем что задача не выполнена
    expect(todoItem).toHaveTextContent("Complete");
  });

  test("should clear completed todos", () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    // Создаем новую задачу
    fireEvent.click(screen.getByText("Add Todo"));
    // Отмечаем задачу как выполненную
    fireEvent.click(screen.getByText("Complete"));

    // Создаем еще одну задачу
    fireEvent.click(screen.getByText("Add Todo"));
    // Отмечаем задачу как выполненную
    fireEvent.click(screen.getByText("Complete"));

    // Очищаем выполненные задачи
    fireEvent.click(screen.getByText("Clear Completed"));

    // Проверяем, что выполненная задача больше не отображается
    expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
  });
});
