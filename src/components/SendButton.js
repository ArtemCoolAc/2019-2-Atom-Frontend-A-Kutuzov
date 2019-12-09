import React from 'react'
import styles from '../static/styles/SendButton.module.css'

const audioType = 'audio/webm'

export class SendButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recording: false,
      audios: [],
    }
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    this.audio = document.createElement('audio')
    this.audio.srcObject = stream

    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: audioType,
    })
    // init data storage for audio chunks
    this.chunks = []
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.chunks.push(event.data)
      }
    }
  }

  startRecording(event) {
    event.preventDefault()
    // wipe old data chunks
    this.chunks = []
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10)
    // say that we're recording
    this.setState({ recording: true })
  }

  stopRecording(event) {
    event.preventDefault()
    // stop the recorder
    this.mediaRecorder.stop()
    // say that we're not recording
    this.setState({ recording: false })
    // save the audio to memory
    this.saveAudio()
  }

  saveAudio() {
    const { audios } = this.state
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, { type: audioType })
    // generate audio url from blob
    const audioURL = window.URL.createObjectURL(blob)

    audios.pop()
    audios.push([audioURL])
    this.props.handlerAudio(audios)

    this.setState({ audios })
  }

  render() {
    const { recording } = this.state

    return (
      <div>
        {!recording && <button className={styles.mic} onClick={(event) => this.startRecording(event)} />}
        {recording && <button className={styles.cancel} onClick={(event) => this.stopRecording(event)} />}
      </div>
    )
  }
}