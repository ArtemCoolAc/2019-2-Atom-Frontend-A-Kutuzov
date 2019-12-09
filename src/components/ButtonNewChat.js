import React from 'react'
import styles from '../static/styles/ButtonNewChat.module.css'

export function ButtonNewChat(props) {
  const { createChat } = props

  function handleClick(event) {
    const nameChat = prompt('Введите имя чата', 'NewChat')
    const userName = prompt('Имя пользователя, с которым ведем диалог', '')
    if (userName) {
      createChat(nameChat, userName)
    }
  }

  return (
    <div className={styles.buttonNew} onClick={handleClick}>
      <div className={styles.pen} />
    </div>
  )
}
