import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/styles/HeaderChat.module.css'

export function HeaderChat(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerButton}>
        <Link to="/">
          <div className={styles.backButton} />
        </Link>
      </div>
      <div className={styles.fullStatus}>
        <div className={styles.userAvatar} />
        <div className={styles.userName}>
          <div className={styles.name}>Артем Кутузов</div>
          <div className={styles.status}>Online</div>
        </div>
      </div>
      <div className={styles.headerButton}>
        <div className={styles.searchButton} />
        <div className={styles.optionsButton} />
      </div>
    </div>
  )
}
