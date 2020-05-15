import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import firebase from 'firebase';
import App from "./components/app";
import "./style/main.scss";


firebase.initializeApp({
  apiKey: "AIzaSyDO5DfRbr8rr0i9f6AIaejf0haEQQv-I6E",
  authDomain: "capstonefirebase-f849b.firebaseapp.com",
  databaseURL: "https://capstonefirebase-f849b.firebaseio.com",
  projectId: "capstonefirebase-f849b",
  storageBucket: "capstonefirebase-f849b.appspot.com",
  messagingSenderId: "962140767646",
  appId: "1:962140767646:web:162eab72e28d62fcab028f",
  measurementId: "G-0XENZL07GY"
});


const createStoreWithMiddleware = applyMiddleware()(createStore);


import { config } from "@fortawesome/fontawesome-svg-core";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
