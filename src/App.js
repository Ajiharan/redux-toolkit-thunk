import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./redux/todoSlice";
import { getTodos } from "./redux/todoAction";
import react, { useEffect } from "react";
export default function App() {
  const dispatch = useDispatch();
  const todoSelector = useSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodos("https://jsonplaceholder.typicode.com", "todos"));
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
