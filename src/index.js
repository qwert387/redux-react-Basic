import React from "react";

import { render } from "react-dom";
import { compose, createStore } from "redux";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
