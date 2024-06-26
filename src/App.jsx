import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>Tic Tac Toe</h1>
        <div className="">
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;
