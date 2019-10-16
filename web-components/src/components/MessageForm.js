const template = document.createElement('template');
template.innerHTML = `
    <style>
        *{
            box-sizing: border-box;
        }
        
        html, body {
            font-family: Arial, Helvetica, sans-serif;
            height: 100vh;
        }
        
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .message-header {
            width: 100%;
            background-color: #2C2D2F;
        }
        
        .main-field {
            display: flex;
            flex-direction: column-reverse;
            align-content: flex-end;
            width: 100%;
            height: calc(100vh - 115px);
            overflow-y: auto;
            background: url("static/images/background_blue.png") 50% 50%;
        }
        
        .message-field {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            align-content: flex-end;
        }
        
        message-shell {
            box-sizing: border-box;
            padding: 2px 5px 10px 10px;
            width: 100%;
        }
        
        .input-line {
            width: 100%;
            flex: auto;
            background-color: darksalmon;
        }
        
    </style>
    <form>
        <div class="message-header">
            <chat-header></chat-header>
        </div>
        <div class="main-field">
            <div class="message-field"></div>
            <!--<chat-field></chat-field>-->
        </div>
        <div class="input-line">
            <form-input placeholder="Порадуй собеседника!"></form-input>
        </div>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$header = this._shadowRoot.querySelector('message-header');
    this.$form = this._shadowRoot.querySelector('form');
    this.$chat = this._shadowRoot.querySelector('.message-field');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.counterMessageID = localStorage.getItem('counter');
    if (Number.isNaN(Number.parseInt(this.counterMessageID, 10))) {
      this.counterMessageID = 0;
      localStorage.setItem('message', JSON.stringify([]));
    } else {
      this.loadLocalStoreMessages();
    }

    this.$input.addEventListener('submit', this._onSubmit.bind(this));
    this.$input.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSubmit() {
    if (this.$input.value !== '') {
      this.createNewMessage(this.$input.value);
      this.$input.setAttribute('value', '');
    }
  }

  loadLocalStoreMessages() {
    let previousDate = '';
    const data = JSON.parse(localStorage.getItem('message'));
    for (const messageData of data) {
      const currentDate = messageData.date;
      if (currentDate !== previousDate) {
        this.addDateLine(currentDate);
        previousDate = currentDate;
      }
      this.insertMessage(messageData);
    }
  }

  addDateLine(date) {
    let element = document.createElement('history-date');
    element = this.$chat.appendChild(element);
    element.setAttribute('date', date);
  }

  createNewMessage(messageText, messageOwner = 'self') {
    const datetime = new Date();
    const MessageData = {
      messageId: this.counterMessageID,
      text: messageText,
      time: `${datetime.getHours()}:${String(datetime.getMinutes()).padStart(2, '0')}`,
      date: `${datetime.getDate()} ${datetime.getMonth()} ${datetime.getFullYear()}`,
      full_date: datetime,
      owner: messageOwner,
    };
    this.insertLocalStorageData(MessageData);
  }

  insertLocalStorageData(MessageData) {
    const data = JSON.parse(localStorage.getItem('message'));
    data.push(MessageData);
    localStorage.setItem('message', JSON.stringify(data));
    this.counterMessageID = Number.parseInt(this.counterMessageID, 10) + 1;
    localStorage.setItem('counter', this.counterMessageID);
    this.insertMessage(MessageData);
  }

  insertMessage(messageData) {
    this.$chat.innerHTML += `
        <message-shell
            ID="${messageData.ID}"
            text="${messageData.text}"
            time="${messageData.time}"
            owner="${messageData.owner}" 
        >''</message-shell>`;
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$input.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
