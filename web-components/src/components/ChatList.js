const template = document.createElement('template');
template.innerHTML = `
  <style>
    *{
      box-sizing: border-box;
    }
    
    :host {
      display: flex;
      flex-direction: column;
      align-content: flex-end;
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    .headerLine {
      width: 100%;
      height: 65px;
      background-color: #8E24AA;
      flex-shrink: 0;
      padding-left: 20px;
    }
  
    .headerLine .menuClickableButton {
      display: inline-block;
      background: url(static/images/menu.png) no-repeat center;
      color: white;
      background-size: 90%;
      margin-right: 30px;
      width: 34px;
      height: 100%;
      float: left;
      cursor: pointer;
    }
  
    .headerLine .baseLine {
      float: left;
      line-height: 65px;
      font-weight: bold;
      font-size: 1.25em;
      color: white;
    }
    
    .headerLine .searchButton {
      width: 40px;
      height: 100%;
      float: right;
      margin-right: 20px;
      background: url(static/images/searching.webp) no-repeat center;
      background-size: 90%;
      cursor: pointer;        
    }
    
    .mainField {
      flex: auto;
      background: url(static/images/background_blue.png);
      overflow-y: auto;
    }
    
    .emptyField {
      padding-top: 10%;
      text-align: center;
      width: 100%;      
      font-size: 0.8em;
      color: white;
    }
    
    one-dialog {
      display: block;
      overflow: hidden;
    }
    
    .buttonNewChat {
      position: absolute;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      cursor: pointer;
      background-color: red;    
      background-size: 30px;
    }
  
    .pencilParameters {
       background: url(static/images/new1.png) no-repeat center;
       background-size: 30px;
       width: 30px;
       height: 60px;
       margin: auto;
    }
  
  </style>
  <form>
    <div class="headerLine">
      <div class="menuClickableButton"></div>
      <div class="baseLine">Мессенджер</div>
      <div class="searchButton"></div>
    </div>
    <div class="mainField">
    </div>
    <div class="buttonNewChat">
      <div class="pencilParameters"></div>
    </div>
  </form>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$mainField = this._shadowRoot.querySelector('.mainField');
  }

  loadChat() {
    const previousTime = null;
    const chatList = JSON.parse(localStorage.getItem('chatList'));
    for (const chat of chatList) {
      let messages = JSON.parse(localStorage.getItem(`chat${chat}`));
      if (messages === null) {
        messages = {};
      }
      let unreadMessagesCounter = 0;
      for (const message of messages) {
        if (message.owner !== 'self' && message.status === 'unread') {
          ++unreadMessagesCounter;
        }
      }
      const dialogData = messages.slice(-1)[0];
      dialogData.opponentName = ChatList.chatName();
      dialogData.opponentAvatar = ChatList.chatAvatar();
      dialogData.unreadMessagesQuantity = unreadMessagesCounter;
      dialogData.chatID = chat;
      const lastMessageTime = dialogData.time;
      const optionBeforeFirst = lastMessageTime > previousTime;
      this.showDialog(dialogData, optionBeforeFirst);
    }
  }

  updateList() {
    this.$mainField.innerHTML = '';
    this.loadChat();
    this.dispatchEvent(new Event('updatingClicking'));
  }

  showDialog(dialogData, optionBeforeFirst) {
    let contact = document.createElement('one-dialog');
    if (optionBeforeFirst === false) {
      contact = this.$mainField.appendChild(contact);
    } else {
      contact = this.$mainField.insertBefore(contact, this.$mainField.firstChild);
    }
    contact.chatDraw(dialogData);
  }

  static chatName() {
    return 'Хороший преподаватель';
  }

  static chatAvatar() {
    return 'static/images/Ava1.jpg';
  }
}

customElements.define('chat-list', ChatList);
