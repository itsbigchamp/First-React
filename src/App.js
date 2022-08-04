import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // 
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First React App</h1>
        <p>
          You clicked the button {count} times!
        </p>
        <button onClick={() => {
          console.log('I clicked the button '+ count)
          // count = count + 1;
          setCount(count + 1)
        }}>Add One</button>
      </header>
    </div>
  );
}

export default App;
