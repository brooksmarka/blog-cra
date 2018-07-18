import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Howdy extends React.Component {
  render() {
    return <div>Howdy</div>;
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Bye Bye Now!</div>;
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/howdy" component={Howdy} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
