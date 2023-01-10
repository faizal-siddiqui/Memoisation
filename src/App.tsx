import React, { useMemo, useState } from "react";

import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState<number>();
  const [value, setValue] = useState(0);

  const fibo = (n: number): number => {
    if (n <= 1) return n;
    return fibo(n - 1) + fibo(n - 1);
  };

  const fiboOfnth = useMemo<number>(() => {
    console.time("t1");
    let ans = fibo(value);
    console.timeEnd("t1");
    return ans
  }, [value]);

  const calc = () => {
    let result = fibo(value);

    setAnswer(result);
  };
  return (
    <div className="App">
      <div>
        <h3>{answer}</h3>
        <div>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <button onClick={calc}>Calc</button>
        </div>
      </div>
      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;
