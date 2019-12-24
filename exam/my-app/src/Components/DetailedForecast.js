import React from 'react';
import useFetch from 'react-fetch-hook';
import styles from '../Styles/OneWeather.module.css'
import { TwoWeather } from './TwoWeather';
import { DetailedTwo } from './DetailedTwo';

export function DetailedWeather(props) {
  console.log(props);
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&lang=ru&appid=`;
  const API_KEY = `351df42bd0c357994a143097e4ebcd70`;
  const { isLoading, data } = useFetch(`${API_URL}${API_KEY}`);
  const hours_list = [
    <DetailedTwo {...data} num={1}/>,
    <DetailedTwo {...data} num={2}/>,
    <DetailedTwo {...data} num={3}/>,
    <DetailedTwo {...data} num={4}/>,
    <DetailedTwo {...data} num={5}/>,
    <DetailedTwo {...data} num={6}/>
  ];

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>{hours_list}</div>
  )
}
