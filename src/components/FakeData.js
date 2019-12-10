export function FakeData() {
  let date = new Date(parseInt(new Date().getTime(), 10))
  date = date
    .toString()
    .split(' ')[4]
    .split(':')

  const chat0 = {
    id: 0,
    dialogName: 'Data Science',
    lastMessage: 'Dumin - one love',
    messageTime: `${date[0]}:${date[1]}`,
    messageStatus: 'sent',
    isGroup: true,
    isOnline: false,
    userName: 'Artem Kutuzov',
  }

  const chat1 = {
    id: 1,
    dialogName: 'Stanlox',
    lastMessage: 'Я В КОРМ2 не пойду, MERCY - сила, КОРМ - могила',
    messageTime: `${date[0]}:${date[1]}`,
    messageStatus: 'read',
    isGroup: false,
    isOnline: true,
    userName: 'Autist Stanlox',
  }

  const arr = [chat0, chat1]
  localStorage.setItem('chatList', JSON.stringify(arr))

  const message0 = {
    id: 1,
    attachment: null,
    owner: 'self',
    text: 'Hello',
    time: `${date[0]}:${date[1]}`,
  }

  const message1 = {
    id: 2,
    attachment: null,
    owner: 'self',
    text: 'Я В КОРМ2 не пойду, MERCY - сила, КОРМ - могила',
    time: `${date[0]}:${date[1]}`,
  }

  const message2 = {
    id: 3,
    attachment: null,
    owner: 'outside',
    text: 'Dumin - one love',
    time: `${date[0]}:${date[1]}`,
  }

  const messages = [[message0, message2], [message1]]
  localStorage.setItem('messageMap', JSON.stringify(messages))
}
