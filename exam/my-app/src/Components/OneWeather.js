import React, {useState, useEffect} from 'react';
import styles from '../Styles/OneWeather.module.css';
import useFetch from 'react-fetch-hook';
import { TwoWeather } from './TwoWeather';

export function OneWeather(props) {
  console.log(props);
  if (props.current) {console.log(true)};

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=ru&appid=`;
  const API_KEY = `351df42bd0c357994a143097e4ebcd70`;
  const {isLoading, data} = useFetch(`${API_URL}${API_KEY}`);

  return  isLoading ? (
    <div>Loading...</div>
  ) : (
    <TwoWeather {...data} num={0}/>
  )
}
