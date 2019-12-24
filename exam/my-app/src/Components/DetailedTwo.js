import React from 'react';
import styles from '../Styles/OneWeather.module.css';

export function DetailedTwo(props) {
  let time = (props.num === 0) ? '' : props.list[props.num].dt_txt;
  console.log(props.list[6]);

  const wind = function getCardinalDirection(angle) {
    const directions = ['↑ С', '↗ С-В', '→ В', '↘ Ю-В', '↓ Ю', '↙ Ю-З', '← З', '↖ С-З'];
    return directions[Math.round(angle / 45) % 8];
  };

  const celcius = function(temperature) {
    return Math.round(temperature) - 273;
  };

  return (
    <div>
      <div className={styles.info}>
        <div className={styles.text}>{props.name} {time}</div>
        <img src={`http://openweathermap.org/img/wn/${props.list[props.num].weather[0].icon}@2x.png`}/>
        <div className={styles.temperature}>{celcius(props.list[props.num].main.temp)}℃</div>
      </div>
      <div className={styles.advanced}>
        <div className={styles.humidity}>Влажность: {props.list[props.num].main.humidity}%</div>
        <div className={styles.direction}>Ветер: {wind(props.list[props.num].wind.deg)}</div>
        <div className={styles.speed}>{props.list[props.num].wind.speed} м/с</div>
        <div className={styles.temp}>{celcius(props.list[props.num].main.temp_max)}/{celcius(props.list[props.num].main.temp_min)} ℃</div>
      </div>
      <div className={styles.description}>{props.list[props.num].weather[0].description}, давление {Math.round(props.list[props.num].main.pressure/1.33)} мм рт. ст.</div>
    </div>
  )
}