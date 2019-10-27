const template = document.createElement('template');
template.innerHTML = `
  <style>
    .shell {
      background: url(static/images/background_blue.png);
      position: relative;
      width: 100vw; /*full screen*/
      height: 100vh; /*full screen*/
      overflow-x: hidden;
    }
    
    .shell * {
      overflow-y: hidden;
      position: absolute;
    }
        
    message-form { /*let's to as in TG (chat is hidden in the right side)*/
      right: -100%;
    }
  
    message-form .opening {
      animation-name: dialogAppearance;
  }
    @keyframes dialogAppearance {
      from {
        right: -100%;
      }
      
      to {
        right: 0%;
      }
    }
    
    message-form .closing {
      animation-name: dialogDisappearance;
    }
    
    @keyframes dialogDisappearance {
      from {
        right 0%;
      }
      
      to {
        right -100%;
      }
    }
    
  </style>  
  <div class="shell">
    <chat-list>''</chat-list>
    <message-form>''</message-form>
  </div>
`;

class ComplexForm extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.temporaryMessages();
    this.$shell = this._shadowRoot.querySelector('.shell');
    this.$chatList = this._shadowRoot.querySelector('chat-list');
    this.$messageForm = this._shadowRoot.querySelector('message-form');
    this.$messageForm.$header = this.$messageForm.$form.querySelector('chat-header');
    this.$messageForm.$header.addEventListener('clickReturnButton', this.closeDialog.bind(this));
    this.$chatList.addEventListener('updatingClicking', this.updatingEventOpenDialog.bind(this));
    this.$chatList.loadChat();
    this.addEventOpenDialog();
  }

  addEventOpenDialog() {
    if (this.addedEvent === undefined) { this.addedEvent = []; }
    let dialogList = [];
    try {
      dialogList = JSON.parse(localStorage.getItem('chatList'));
    } catch (SyntaxError) {
      console.log('Invalid JSON!');
    }
    dialogList.forEach((chatID) => {
      if (!(chatID in this.addedEvent)) {
        const elem = this.$chatList.$mainField.querySelectorAll('one-dialog')[chatID];
        elem.addEventListener('click', () => this.openDialog(chatID));
        this.addedEvent.push(chatID);
      }
    });
  }

  updatingEventOpenDialog() {
    delete this.addedEvent;
    this.addEventOpenDialog();
  }

  openDialog(chatID) {
    this.$messageForm.setAttribute('chatID', chatID);
    this.$messageForm.style.animationTimingFunction = 'ease-in-out';
    this.$messageForm.animationFillMode = 'forwards';
    this.$messageForm.style.right = 0;
    this.$messageForm.clearMessageField();
    this.$messageForm.loadLocalStoreMessages();

    this.$messageForm.addEventListener('updateList', this.updateLastMessage.bind(this));
  }

  closeDialog() {
    this.$messageForm.style.right = '-100%';
  }

  updateLastMessage() {
    this.$chatList.updateList();
  }

  temporaryMessages() {
    this.flag = localStorage.getItem('flag');
    if (this.flag === null) {
      localStorage.setItem('chatList', JSON.stringify([0, 1]));
      localStorage.setItem('messageCounter', JSON.stringify([28, 1]));
      const a = [{
        messageId: 0,
        text: 'something new',
        time: '23:46',
        date: '24 9 2019',
        full_date: '2019-10-24T20:46:51.147Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 1,
        text: 'Азаза',
        time: '23:50',
        date: '24 9 2019',
        full_date: '2019-10-24T20:50:27.306Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 2,
        text: 'Что-то',
        time: '0:23',
        date: '25 9 2019',
        full_date: '2019-10-24T21:23:54.152Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 3,
        text: 'Ухахах',
        time: '1:26',
        date: '25 9 2019',
        full_date: '2019-10-24T22:26:19.586Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 4,
        text: 'Ну да, ну да!',
        time: '16:05',
        date: '25 9 2019',
        full_date: '2019-10-25T13:05:54.732Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 5,
        text: 'Хоп хей ла ла лей',
        time: '17:54',
        date: '25 9 2019',
        full_date: '2019-10-25T14:54:49.194Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 6,
        text: 'ПопеРечный',
        time: '17:56',
        date: '25 9 2019',
        full_date: '2019-10-25T14:56:46.664Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 7,
        text: 'Джарахов',
        time: '17:58',
        date: '25 9 2019',
        full_date: '2019-10-25T14:58:01.983Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 8,
        text: 'Соболев',
        time: '18:01',
        date: '25 9 2019',
        full_date: '2019-10-25T15:01:33.534Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 9,
        text: 'Ильич',
        time: '18:03',
        date: '25 9 2019',
        full_date: '2019-10-25T15:03:35.183Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 10,
        text: 'Прокофьев',
        time: '18:12',
        date: '25 9 2019',
        full_date: '2019-10-25T15:12:29.255Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 11,
        text: 'Старый',
        time: '18:28',
        date: '25 9 2019',
        full_date: '2019-10-25T15:28:41.262Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 12,
        text: 'Музыченко',
        time: '18:30',
        date: '25 9 2019',
        full_date: '2019-10-25T15:30:22.297Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 13,
        text: 'Онежко',
        time: '18:32',
        date: '25 9 2019',
        full_date: '2019-10-25T15:32:08.395Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 14,
        text: 'Пуська',
        time: '18:34',
        date: '25 9 2019',
        full_date: '2019-10-25T15:34:07.406Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 15,
        text: '8-5',
        time: '18:35',
        date: '25 9 2019',
        full_date: '2019-10-25T15:35:15.837Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 16,
        text: '8-9',
        time: '18:37',
        date: '25 9 2019',
        full_date: '2019-10-25T15:37:11.018Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 17,
        text: '1-4',
        time: '18:37',
        date: '25 9 2019',
        full_date: '2019-10-25T15:37:50.866Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 18,
        text: '2-2',
        time: '19:09',
        date: '25 9 2019',
        full_date: '2019-10-25T16:09:07.735Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 19,
        text: '14-88',
        time: '19:12',
        date: '25 9 2019',
        full_date: '2019-10-25T16:12:52.676Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 20,
        text: '228',
        time: '19:13',
        date: '25 9 2019',
        full_date: '2019-10-25T16:13:11.366Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 21,
        text: 'Приветствую всех!',
        time: '21:44',
        date: '25 9 2019',
        full_date: '2019-10-25T18:44:36.090Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 22,
        text: 'Всем покаё',
        time: '22:33',
        date: '25 9 2019',
        full_date: '2019-10-25T19:33:04.470Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 23,
        text: 'Или нет',
        time: '22:34',
        date: '25 9 2019',
        full_date: '2019-10-25T19:34:24.918Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 24,
        text: 'Тип того',
        time: '22:37',
        date: '25 9 2019',
        full_date: '2019-10-25T19:37:57.410Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 25,
        text: 'Можно ещё?',
        time: '22:47',
        date: '25 9 2019',
        full_date: '2019-10-25T19:47:26.465Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 26,
        text: 'Или нет?',
        time: '22:55',
        date: '25 9 2019',
        full_date: '2019-10-25T19:55:05.479Z',
        owner: 'self',
        status: 'unread',
      }, {
        messageId: 27,
        text: 'Аля ул.',
        time: '22:55',
        date: '25 9 2019',
        full_date: '2019-10-25T19:55:37.037Z',
        owner: 'self',
        status: 'unread',
      }];
      localStorage.setItem('chat0', JSON.stringify(a));
      const b = [{
        messageId: 0,
        text: 'Новый год',
        time: '23:46',
        date: '24 9 2019',
        full_date: '2019-10-24T20:46:51.147Z',
        owner: 'self',
        status: 'unread',
      }];
      localStorage.setItem('chat1', JSON.stringify(b));
      localStorage.setItem('flag', 'isSet');
    }
  }
}

customElements.define('complex-form', ComplexForm);
