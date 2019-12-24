import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import HighApp from './Components/App';
import * as serviceWorker from './serviceWorker';
import Application from './Application';
import useFetch from 'react-fetch-hook';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

//ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
