import React from 'react'
import { DialogBox } from './DialogBox'
import styles from '../styles/ChatList.module.css'

export function ChatList(props) {
  const list = []
  let counter = 0
  const { chatList, setActiveChat } = props

  if (!chatList) {
    list.push(<div className={styles.noMessage}>Нет чатиков(:</div>)
  } else {
    // eslint-disable-next-line
    chatList.map((item) => {
      const Chat = <DialogBox key={counter++} boxInfo={item} setActiveChat={setActiveChat} />

      list.push(Chat)
    })
  }

  return (
    <div>
      <div className={styles.wrap}>{list}</div>
    </div>
  )
}
