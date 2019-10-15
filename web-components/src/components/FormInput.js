const template = document.createElement('template');
template.innerHTML = `
    <style>
        
        input {
            flex: auto;
            border: none;
            outline: none;
            height: 55px;
            background-color: transparent;
            font-family: Arial, Helvetica, sans-serif;
            color: darkgreen;
            font-size: 1.1em;
        }

        :host {
            display: flex;
            flex-direction: row;
        }
        
        .interactButton {
            width: 40px;
            cursor: pointer;
            margin: 0 15px;
        }
        
        .AddFileButton {
            background: url(static/images/clip.png) center no-repeat;
            background-size: 90%;
        }
        
        .EnterButton {
            background: url(static/images/confirm_button.png) center no-repeat;
            background-size: 90%;
        }
        
    </style>
    <div class="interactButton AddFileButton"></div>    
    <input/>
    <div class="interactButton EnterButton"></div>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this._shadowRoot.querySelector('input');
    this.$enterButton = this._shadowRoot.querySelector('.EnterButton');

    this.$enterButton.addEventListener('click', this._onSubmit.bind(this));
  }

  _onSubmit() {
    this.dispatchEvent(new Event('submit'));
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      this.$input.value = newValue;
    }
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }
}

customElements.define('form-input', FormInput);
