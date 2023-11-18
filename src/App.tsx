import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App(): React.ReactNode {
  const [count, setCount] = useState(0);

  function handleOnclick() {
    setCount(() => count + 1);
  }

  return (
    <>
      <h1>Welcome to React Ritwik!</h1>
      <h3>This is the {count}</h3>
      <button onClick={handleOnclick}>Click Me</button>
    </>
  );
}

export default App;
