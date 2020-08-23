import React from "react";
import "./App.css";

import { Description } from "./Description";
import { WordCloud } from "./WordCloud";

function App() {
  return (
    <div className="App">
      <WordCloud />
      <Description />
    </div>
  );
}

export default App;
