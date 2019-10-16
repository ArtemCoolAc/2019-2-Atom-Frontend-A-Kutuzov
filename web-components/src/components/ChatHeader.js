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
            width: 40px;
        }
        
        .personProperties .userFIOstatus {
            padding-top: 4px;
            height: 100%;
        }
        
        .userFIOstatus .FIO {
            font-size: 0.94em;
        }
        
        .userFIOstatus .status {
            font-size: 0.82em;
            color: hotpink;
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
            <div class="FIO">Артем NoMercy Кутузов</div>
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
  }
}


customElements.define('chat-header', ChatHeader);
