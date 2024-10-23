import { createBrowserRouter } from "react-router-dom";
import { ListaDeTarefas } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListaDeTarefas />,
  },
]);
