import React from 'react';
import styles from '../Styles/OneWeather.module.css';

export function OneWeather(props) {
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.text}>Москва</div>
        <div className={styles.icon}>2</div>
      </div>
      <div className={styles.advanced}>
        <div className={styles.parameters}>Влажность: 70%| Ветер: с-з 3м/с</div>
        <div className={styles.temp}>1-2</div>
      </div>
    </div>
  )
}
