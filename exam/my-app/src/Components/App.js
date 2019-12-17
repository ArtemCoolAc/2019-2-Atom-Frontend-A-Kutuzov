import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import styles from '../Styles/App.module.css'
import {OneWeather} from './OneWeather';
import {NewCity} from './NewCity';


function App(props) {
  let list = [];
  for (let i = 0; i < 10; ++i) {
    list.push(<div className={styles.item}><OneWeather/></div> );
  }
  return (
    <div className={styles.sheet}>
      <div className={styles.header}>Погода</div>
      <div>{list}</div>
      <NewCity/>
      {/*<header className="App-header">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

    </div>
  );
}

export default App;
