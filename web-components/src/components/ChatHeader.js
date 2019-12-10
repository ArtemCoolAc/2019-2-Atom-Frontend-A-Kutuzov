const template = document.createElement('template');
template.innerHTML = `
    <style>
        *{
            box-sizing: border-box;
        }
        
        :host {
            height: 60px;
            background-color: #8E24AA;
            display: flex;
            flex-direction: row;
        }
        
        .headerClickableButton {
            margin: 0 15px;
            width: 30px;
            height: 100%;
            cursor: pointer;
        }
        
        .headerClickableButton:hover {
            opacity: 0.85;
        }
        
        .personProperties {
            display: flex;
            flex: auto;
            flex-direction: row;
            justify-content: center;
            padding-top: 9px;
        }
        
        .personProperties .avatar {
            background: url(static/images/Ava1.jpg) no-repeat center; 
            background-size: cover;
            border-radius: 25px;
            margin-right: 15px;
            height: 40px;
            min-width: 40px;
            width: 40px;
        }
        
        .personProperties .userFIOstatus {
            /*padding-top: 4px;*/
            height: 100%;
        }
        
        .userFIOstatus .FIO {
            text-align: left;
            font-size: var(--fontNear);
        }
        
        .userFIOstatus .status {
            font-size: var(--fontMin);
            color: hotpink;
            text-align: left;
        }
        
        .returnBack{
            background: url(static/images/return_but.png) no-repeat center;
            background-size: 100%;
            width: 40px;
        }
        
        .searchButton{
            margin: 0;
            width: 40px;
            background: url(static/images/searching.webp) no-repeat center;
            background-size: 90%;          
        }
        
        .searchButton:hover {
            opacity: 0.8;
        }

        .optionsButton{
            background: url(static/images/opt.png) no-repeat center;
            background-size: 90%;
            width: 40px;
        }
                    
    </style>
    <div class="headerClickableButton returnBack"></div>
    <div class="personProperties">
        <div class="avatar"></div>
        <div class="userFIOstatus">
            <div class="FIO">Хороший преподаватель</div>
            <div class="status">онлайн</div>
        </div>
    </div>
    <div class="headerClickableButton searchButton"></div>
    <div class="headerClickableButton optionsButton"></div>
`;

class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$returnButton = this._shadowRoot.querySelector('.returnBack');

    this.$returnButton.addEventListener('click', this.returnButton.bind(this));
  }

  returnButton() {
    this.dispatchEvent(new Event('clickReturnButton'));
  }
}


customElements.define('chat-header', ChatHeader);
