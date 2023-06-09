import { useAppDispatch, useAppSelector } from "./hooks";
import reactLogo from "./assets/react.svg";
import {
  increment,
  incrementWithValue,
} from "./features/counter/counter-slice";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function onClickHandler() {
    dispatch(increment());
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React with Redux Toolkit </h1>
      <div className="card">
        <button onClick={onClickHandler}>Increment</button> &nbsp;
        <button onClick={() => dispatch(incrementWithValue(5))}>
          Increment by 5
        </button>
      </div>
      <p className="read-the-docs">Value of count is {count}</p>
    </>
  );
}

export default App;
