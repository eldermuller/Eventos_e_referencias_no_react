import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

  function incrementFunctionRef() {
    countRef.current += 1;
    console.log("Valor de countRef", countRef.current);
  }

  function incrementFunctionLet() {
    count += 1;
    console.log("Valor de count", count);
  }

  return (
    <div className="App">
      <h1>b</h1>
      <button
        onClick={() => incrementFunctionRef()}
        ref={incrementRef}
      >
        Increment ref
      </button>
      <button
        onClick={() => incrementFunctionLet()}
        ref={incrementLet}
      >
        Increment let
      </button>
    </div>
  );
}

export default App;
