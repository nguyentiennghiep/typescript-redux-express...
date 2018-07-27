import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index'

import App from './views/components/app/app'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);
