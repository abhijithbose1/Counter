import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  const [count , setCount] = useState(0);
  function onIncrement() {
    if (count >= 0 && count < 10) {
        setCount((count) => count + 1);
    } else {
        alert("Max Count is 10");
    }
}
console.log(count, "==count");
function onDecrement() {
    if (count > 0) {
        setCount((count) => count - 1);
    } else {
        alert("Min count is zero");
    }
}
    return (
        <>
            <h4>App.js Component</h4>
            <h3>you've clicked {count} Times</h3>
            <Counter count={count} setCount={setCount} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </>
    );
}

export default App;
