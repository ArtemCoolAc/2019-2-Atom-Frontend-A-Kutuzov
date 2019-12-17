import React from 'react'
import { ChatList } from './ChatList'
import { HeaderDialogList } from './HeaderDialogList'
import { ButtonNewChat } from './ButtonNewChat'

export class ControlChatList extends React.Component {
  constructor(props) {
    super(props)

    const info = this.parseDataDB()

    this.state = {
      chatList: info.chatList,
    }

    this.createChat = this.createChat.bind(this)
  }

  parseDataDB() {
    let data
    try {
      data = {
        chatList: JSON.parse(localStorage.getItem('chatList')),
      }
    } catch (Error) {
      localStorage.clear()
      data = {
        chatList: null,
      }
    }
    return data
  }

  createChat(nameChat, username) {
    const { chatList } = this.state

    let date = new Date(parseInt(new Date().getTime(), 10))
    date = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`

    this.setState({
      chatList: [
        ...chatList,
        {
          id: chatList.length,
          dialogName: nameChat,
          lastMessage: '',
          messageTime: `${date[0]}:${date[1]}`,
          messageStatus: '',
          isGroup: false,
          isOnline: false,
          userName: username,
        },
      ],
    })

    localStorage.setItem('chatList', JSON.stringify(chatList))
  }

  render() {
    const { chatList } = this.state
    return (
      <div>
        <HeaderDialogList />
        <ChatList chatList={chatList} setActiveChat={this.props.setActiveChat} />
        <ButtonNewChat createChat={this.createChat} />
      </div>
    )
  }
}
