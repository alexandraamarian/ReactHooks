import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ReactHooksApp from "./ReactHooksApp";

function App() {
  return (
    <Provider store={store}>
      <ReactHooksApp />
    </Provider>
  );
}

export default App;
