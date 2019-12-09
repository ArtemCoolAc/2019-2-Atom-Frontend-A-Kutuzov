import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/styles/HeaderDialogList.module.css'

export function HeaderDialogList(props) {
  return (
    <div className={styles.header}>
      <Link to="/profile">
        <div className={styles.menu} />
      </Link>
      <div className={styles.message}>Мессенджер</div>
      <div className={styles.search} />
    </div>
  )
}
