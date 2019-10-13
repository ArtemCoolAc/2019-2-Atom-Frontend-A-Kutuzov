const template = document.createElement('template');
template.innerHTML=`
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
        this._shadowRoot = this.attachShadow({mode: 'open'});
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
        this._renderDateLine();
    }

    /*set date(date) {
        this.setAttribute('date', date);
    }*/

    _renderDateLine() {
        let our_month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let now = new Date();
        let current = now.getDate() + ' ' + now.getMonth() + ' ' + now.getFullYear();
        let date = this.date;
        if (this.date === current) {
            this.$textDate.innerText = 'Сегодня, ';
        }
        let tmp = date.split(' ');
        let normalDate = {day: tmp[0], month: tmp[1], year: tmp[2]};
        this.$textDate.innerText += ' ' + normalDate.day + ' ' + our_month[normalDate.month] + ' ' + normalDate.year;
    }

}


customElements.define('history-date', HistoryDate);