const template = document.createElement('template');
template.innerHTML = `
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .dialog-form {
      display: flex;
      width: 100%;
      height: 90px;
      cursor: pointer;
      background-color: salmon;
      border: 1px solid grey;
    }
    
    .avatar {
      margin: 10px 10px;
      border-radius: 50px;
      background-size: cover;
      width: 70px;
      height: 70px;
    }
    
    .dialogData{
      flex: auto;
      height: 100%;
      padding: 12px;
      width: 100%;
    }
  
    .dialogOpponentName {
      margin-bottom: 10px;
    }
    
    .dialogOpponentName a {
      font-size: 0.95em;
      font-weight: bold;
      color: gold;
    }
  
    .lastSentMessageTime {
      color: lime;
      font-size: 0.8em;
      float: right;
    }
    
    .lastDialogMessage {
      display: flex;
      color: white;
    }

    .lastDialogMessage p {
      margin 0 20px 0 0;
      flex: auto;
      font-size: 0.9em;
      overflow: hidden;
      text-overflow: ellipsis; 
      white-space: nowrap; 
    }
  
    .lastDialogMessageStatus {
      display: inline-block;
      height: 28px;
      width: 28px;
    }
  
    .unread {
      background: url(static/images/read3.png) no-repeat top;
      background-size: 18px;
    }
    
    .read {
      background: url(static/images/read3.png) no-repeat top;
      background-size: 18px;
     }
   
    .unreadMessagesQuantity {
      background-color: #497994;
      border-radius: 12px;
      font-size: 0.8em;
      text-align: center;
      font-weight: bold;
      color: #E2E3E5;
      padding: 3px 8px;
      width: unset;
      height: unset;
    }    
    
  </style>
  <div class="dialog-form">
    <div class="avatar"></div>
    <div class="dialogData">
      <div class="dialogOpponentName">
        <a></a>
        <span class="lastSentMessageTime"></span>
      </div>
      <div class="lastDialogMessage">
        <p></p>
        <span class="lastDialogMessageStatus"></span>
      </div>
    </div>
  </div>
`;

class OneDialog extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$lastMessage = this._shadowRoot.querySelector('.lastDialogMessage p');
    this.$opponentName = this._shadowRoot.querySelector('.dialogOpponentName a');
    this.$opponentAvatar = this._shadowRoot.querySelector('.avatar');
    this.$lastMessageTime = this._shadowRoot.querySelector('.lastSentMessageTime');
    this.$lastMessageStatus = this._shadowRoot.querySelector('.lastDialogMessageStatus');
  }

  chatDraw(dialogData) {
    this.$opponentName.innerText = dialogData.opponentName;
    this.$lastMessage.innerText = dialogData.text;
    this.$opponentAvatar.setAttribute('style', `background-image: url(${dialogData.opponentAvatar}) ;`);
    this.addDate(dialogData.date, dialogData.time);
    this.addStatus(dialogData);
  }

  addDate(date, time) {
    const ourMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const now = new Date();
    const current = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;
    const [day, month, year] = date.split(' ');
    this.$lastMessageTime.innerText = `${day} ${ourMonth[month]} ${year}`;
    if (current === date) {
      this.$lastMessageTime.innerText = `${time}`;
    }
  }

  addStatus(dialogData) {
    switch (dialogData.status) {
      case 'unread':
        if (dialogData.owner !== 'self') {
          this.$lastMessageStatus.className = 'lastDialogMessageStatus';
          this.$lastMessageStatus.classList.add('unreadMessagesQuantity');
          this.$lastMessageStatus.innerText = dialogData.unreadMessagesQuantity;
        } else {
          this.$lastMessageStatus.className = 'lastDialogMessageStatus';
          this.$lastMessageStatus.classList.add(dialogData.status);
        }
        break;
      default:
        this.$lastMessageStatus.className = 'lastDialogMessagesStatus';
        this.$lastMessageStatus.classList.add(dialogData.status);
        this.$lastMessageStatus.innerText = '';
        break;
    }
  }

  static get observedAttributes() {
    return ['dialogData'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.setAttribute(name, newValue);
  }
}

customElements.define('one-dialog', OneDialog);
