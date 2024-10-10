import { ChakraProvider } from "@chakra-ui/react";
import { TodosPage } from "../pages/todos";
import "./styles/global.css";
import { TodoProvider } from "../entities/todo";

function App() {
  return (
    <>
      <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
        <TodoProvider>
          <TodosPage />
        </TodoProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
