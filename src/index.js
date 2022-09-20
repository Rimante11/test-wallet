import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
  rootElement
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


