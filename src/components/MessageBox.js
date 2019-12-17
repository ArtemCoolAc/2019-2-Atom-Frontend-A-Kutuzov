import React from 'react'
import styles from '../static/styles/MessageBox.module.css'

export function MessageBox(props) {
  const { content, shift } = props

  let style = null
  if (shift === 'self') {
    style = { float: 'right' }
  } else {
    style = { float: 'left' }
  }

  //let isAudio = true;
  /*if (isAudio) {
    style.width = '40%';
  }*/

  return (
    <div className={styles.messageBox} style={style}>
      {!content.attachment && <div className={styles.text}>{content.text}</div>}
      {content.attachment && content.attachment.type === 'audio' && (
        <div className={styles.Box}>
          <audio src={content.attachment.path[0]} controls />
        </div>
      )}
      {content.attachment && content.attachment.type === 'document' && (
        <a href={content.attachment.path[0]}>{content.attachment.name}</a>
      )}
      {content.attachment && content.attachment.type === 'image' && (
        <p className={styles.img}>
          <img src={content.attachment.path[0]} alt="" height="200px" />
        </p>
      )}
      <div className={styles.time}>{content.time}</div>
    </div>
  )
}
