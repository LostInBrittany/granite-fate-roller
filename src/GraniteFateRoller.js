import { LitElement, html, css, internalProperty } from 'lit-element';

export class GraniteFateRoller extends LitElement {
    
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .roller {
        color: inherit;
        border: 0;
        cursor: pointer;
        margin: 0;
        display: inline-flex;
        outline: 0;
        padding: 0;
        position: relative;
        align-items: center;
        user-select: none;
        border-radius: 0;
        vertical-align: middle;
        -moz-appearance: none;
        justify-content: center;
        text-decoration: none;
        background-color: transparent;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      }
      .result{
        font-size: 4.5rem;
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
        line-height: normal;
        color: inherit;
        background: rgb(255, 255, 255);
        border: 0.5rem solid rgba(0, 0, 0, 0.87);
        border-radius: 4px;
        padding: 0.2rem;
        min-width: 7rem;
        height: 7rem;
        width: 7rem;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: rgb(0 0 0 / 20%) 3px 5px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
      }
    `;
  }

  static get properties() {
    return {
      skill: {
        type: String,
        default: undefined,
      },
      bonus: {
        type: Number,
      },
      dice: {
        type: Array,
      },
      debug: {
        type: Boolean,
        default: false,
      }
    };
  }

  constructor() {
    super();
  }

  get bonus() {
    return this._bonus;
  }

  set bonus(value) {
    let oldVal = this._bonus;
    if (typeof value != "number" || [0,1,2,3,4].indexOf(value) <0) {
      return;
    }
    this._bonus = value;
    this.requestUpdate('bonus', oldVal);
  }

  get dice() {
    return this._dice;
  }

  set dice(value) {
    let oldVal = this._dice;
    if (!Array.isArray(value) || value.length != 4) {
      return;
    }
    if (value
        .filter((die) => (typeof die != "number" || [-1,0,1].indexOf(die) <0))
        .length >0) {
      return;
    }
    this._dice = value;
    this.requestUpdate('dice', oldVal);
  }

  rollDice() {
    this.dice = [0,0,0,0].map(() => this.rollDie());
    if (this.debug) {
      console.log( this.dice);
    }
  }

  rollDie() {
    let result = Math.floor(3*Math.random())-1;
    return result;
  }

  result() {
    if (!this.dice) {
      return '';
    }
    let skill = this.skill ? this.skill : 0;
    return skill + this.dice.reduce((a, b) => a + b, 0);
  }
  render() {
    console.log("dice",this.dice);
    return html`
      <button class="roller" @click="${this.rollDice}">
        <span class="result">
          ${ this.result()}
        </span>
      </button>
    `;
  }
    
}