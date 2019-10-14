const template = document.createElement('template');
template.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :host {
            width: 100%;
        }
        
        .textDate {
            padding-bottom: 20px;
            padding-top: 20px;
            font-weight: 300;
            font-size: 0.85em;
            text-align: center;
            color: black;
            width: 100%;
        }
        
    </style>
    <div class="textDate"></div>
`;

class HistoryDate extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$textDate = this._shadowRoot.querySelector('.textDate');
  }

  static get observedAttributes() {
    return ['date'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'date') {
      this.date = newValue;
    }
    this.renderDateLine();
  }

  /* set date(date) {
        this.setAttribute('date', date);
    } */

  renderDateLine() {
    const ourMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const now = new Date();
    const current = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;
    const { date } = this;
    if (this.date === current) {
      this.$textDate.innerText = 'Сегодня, ';
    }
    const tmp = date.split(' ');
    const normalDate = { day: tmp[0], month: tmp[1], year: tmp[2] };
    this.$textDate.innerText += ` ${normalDate.day} ${ourMonth[normalDate.month]} ${normalDate.year}`;
  }
}


customElements.define('history-date', HistoryDate);