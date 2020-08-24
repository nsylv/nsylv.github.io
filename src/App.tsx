import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

import { rootReducer } from "./reducers";
import { Description } from "./Description";
import { WordCloud } from "./WordCloud";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WordCloud />
        <Description />
      </div>
    </Provider>
  );
}

export default App;
