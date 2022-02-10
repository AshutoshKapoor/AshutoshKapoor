import React from 'react';
import { createStore, getState } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import movies from './Components/reducers/index';
// import {data} from './data';

const store = createStore(movies);



ReactDOM.render(<App store={store}/>,document.getElementById('root'));


