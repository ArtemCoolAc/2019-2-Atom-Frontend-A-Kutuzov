import React, { useState, useRef } from 'react'
import { SendButton } from './SendButton'
import styles from '../static/styles/FormInput.module.css'

export function FormInput(props) {
  const { sendMessage } = props

  const image = useRef()
  const document = useRef()
  const [message, setMessage] = useState('')
  const [styleMenu, setStyleMenu] = useState(null)

  function onSubmit(event, attachment = null) {
    if (event.charCode === 13) {
      sendMessage(message, attachment)
      setMessage('')
    }
  }

  function handlerAudio(audioURL) {
    if (audioURL) {
      const object = {
        name: 'AudioMessage',
        type: 'audio',
        path: audioURL,
      }
      sendMessage(null, object, true)
    }
  }

  function onAttachButtonClick(event) {
    !styleMenu &&
      setStyleMenu({
        height: '120px',
        boxShadow: '0 0 60px 10px #151716',
      })
    styleMenu && setStyleMenu(null)
  }

  function onChanging(event) {
    setMessage(event.target.value)
  }

  function sendGeolocation(event) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geoLocation = `https://www.openstreetmap.org/#map=17/${position.coords.latitude}/${position.coords.longitude}`
      const geoObject = <a href={geoLocation}>{geoLocation}</a>
      sendMessage(geoObject)
    })
  }

  function sendImage(event) {
    const additionsList = event.target.files
    if (!additionsList.length) {
      return false
    }

    const object = {
      name: additionsList[0].name,
      type: 'image',
      path: [window.URL.createObjectURL(additionsList[0])],
    }

    sendMessage(null, object)
  }

  function onSendFile(event) {
    const additionsList = event.target.files
    if (!additionsList.length) {
      return false
    }

    const object = {
      name: additionsList[0].name,
      type: 'document',
      path: [window.URL.createObjectURL(additionsList[0])],
    }

    sendMessage(null, object)
  }

  return (
    <div className={styles.footer}>
      <div className={styles.inputButton}>
        <div className={styles.additionalButton} onClick={onAttachButtonClick}>
          <ul style={styleMenu} className={styles.listStyle}>
            <li className={styles.li} onClick={sendGeolocation}>
              Геолокация
            </li>
            <li className={styles.li} onClick={() => document.current.click()}>
              Файл
              <input ref={document} type="file" onChange={onSendFile} style={{ display: 'none' }} />
            </li>
            <li className={styles.li} onClick={() => image.current.click()}>
              Изображение
              <input ref={image} type="file" accept="image/*" onChange={sendImage} style={{ display: 'none' }} />
            </li>
          </ul>
        </div>
      </div>
      <input
        className={styles.customInput}
        onKeyPress={onSubmit}
        onChange={onChanging}
        value={message}
        placeholder="Порадуй собеседника!"
        type="text"
      />
      <SendButton handlerAudio={handlerAudio} />
    </div>
  )
}
