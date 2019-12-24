import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import styles from '../Styles/App.module.css'
import {OneWeather} from './OneWeather';
import {NewCity} from './NewCity';
import {DetailedWeather} from './DetailedForecast';

function App() {
  const [state, setState] = useState(10);

  let results = [];
  let list = [];

  // let position = window.navigator.geolocation.getCurrentPosition(pos => {position = pos});

  function onClick(event) {
    const city = prompt('Введите название города');
    list.push(<div className={styles.item}><OneWeather city={city}/></div>);
    setState({state} + 1);
    console.log(list);
  }

  //list.unshift(<div className={styles.item}><OneWeather city={''} current={true}/></div>);
  const cities = ['Berlin', 'Amsterdam', 'Montreal', 'Paris', 'Sydney', 'Tokyo', 'London', 'Madrid', 'Geneva', 'New York'];
  const routes_list = [];
  for (const city of cities) {
    const path = `/${city}`;
    list.push(<Link to={path}><div className={styles.item}><OneWeather city={city}/></div></Link>);
    routes_list.push(<Route path={path}><DetailedWeather city={city}/></Route>)
  }

  // let city = fetch('https://ipinfo.io/json').then(response =>
  //   response.json().then(data => ({
  //       data: data,
  //       status: response.status
  //     })
  //   ).then(res => {
  //     city = res.data.city;
  //   }));

  return (
    <div className={styles.sheet}>
      <Router basename={'/2019-2-Atom-Frontend-A-Kutuzov'}>
        <Switch>
          <Route path="/" exact>
            <div className={styles.header}>
              <div className={styles.text}>Погода</div>
            </div>
            <div>{list}</div>
            <button onClick={onClick}><NewCity/></button>
          </Route>
          {routes_list}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
