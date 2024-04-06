import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import './sass/style.scss';
import {getBlogsFromDatabase } from './tools/action/blogAction';
import configureStore from './tools/store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const store = configureStore();




const result = (
  <Provider store={store}>
      <App />
    </Provider>
)
  



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})