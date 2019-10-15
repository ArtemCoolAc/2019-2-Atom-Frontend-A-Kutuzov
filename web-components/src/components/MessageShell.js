const template = document.createElement('template');
template.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .messageWrap {
            display: inline-block;
            padding: 5px 10px 5px 10px;
            border-radius: 10px; /*let's make rounded rectangle*/
            text-align: left;
            word-wrap: break-word;
            max-width: 55%;
        }
        
        .self {
            color: darkgreen;
            background-color: greenyellow;
            float: right;
        }
        
        .self .datetime {
            text-align: right;
            color: dimgrey;
            font-size: 0.8em;
        }
        
        .self:after {
            clear: both;
        }
        
        li {
            list-style: none; /*to delete list markers*/
        }
    </style>
    <li>
        <div class="messageWrap">
            <div class="text">default сообщение</div>
            <div class="datetime">2:28</div>
        </div>
    </li>

`;

class MessageShell extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$messageBox = this._shadowRoot.querySelector('.messageWrap');
    this.$messageText = this._shadowRoot.querySelector('.text');
    this.$messageTime = this._shadowRoot.querySelector('.datetime');
    this.$messageDate = this._shadowRoot.querySelector('.date');
  }

  static get observedAttributes() {
    return ['ID', 'text', 'time', 'date', 'owner'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'ID':
        this.$messageBox.setAttribute('messageID', newValue);
        break;

      case 'text':
        this.$messageText.innerText = newValue;
        break;

      case 'time':
        this.$messageTime.innerText = newValue;
        break;

      case 'date':
        this.$messageDate.innerText = newValue;
        break;

      case 'owner':
        this.$messageBox.classList.add(newValue);
        break;

      default:
    }
  }
}

customElements.define('message-shell', MessageShell);
