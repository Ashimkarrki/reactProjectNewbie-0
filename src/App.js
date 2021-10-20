import questions from "./data/questions";

import { useState } from "react";
import Second from "./Second";
import "../src/home.css";
function App() {
  const [data, setData] = useState(questions);
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="main">
        <h1>Questions And Answer About Login</h1>
        <div className="cards">
          {data.map((s) => {
            return <Second data={s} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
