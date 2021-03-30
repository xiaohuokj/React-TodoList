import React from 'react';
import ReactDOM from 'react-dom';
//　import TodoList from './TodoList';
//　import TodoLists from './TodoLists';
//　import App from './App';
import TodoListReactRedux from './TodoListReactRedux';
import {Provider} from "react-redux";
import store from "./storeReactRedux";

const App = (
    <React.StrictMode>
      <Provider store={store}>
        <TodoListReactRedux />
      </Provider>
    </React.StrictMode>
)

ReactDOM.render(
    App,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
