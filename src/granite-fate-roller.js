import { LitElement, html, css, internalProperty } from 'lit-element';
import { GraniteTooltip } from './granite-tooltip.js';
import { GraniteFateRoll } from './granite-fate-roll.js';

import dateDiceStyles from './granite-fate-styles';

export class GraniteFateRoller extends LitElement {
    
  static get styles() {
    return [
      dateDiceStyles,
      css`
        :host {
          display: inline-block;
          font-size: 100%;
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
          font-size: var(--fate-font-size, 32px);
          font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
          line-height: normal;
          color: inherit;
          background: rgb(255, 255, 255);
          border: calc(0.1 * var(--fate-font-size, 32px)) solid rgba(0, 0, 0, 0.87);
          border-radius: 4px;
          padding: 0.2rem;
          min-width: calc(1.5 * var(--fate-font-size, 32px));
          height: calc(1.5 * var(--fate-font-size, 32px));
          width: calc(1.5 * var(--fate-font-size, 32px));
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          box-shadow: rgb(0 0 0 / 20%) 3px 5px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
        }
      `,
    ]
  }

  static get properties() {
    return {
      skill: {
        type: String,
      },
      bonus: {
        type: Number,
      },
      dice: {
        type: Array,
      },
      tooltipPosition: {
        attribute: 'tooltip-position',
      },
      debug: {
        type: Boolean,
      }
    };
  }

  constructor() {
    super();
    this.skill = '';
    this.debug = false;
    this.tooltipPosition = 'top';
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
    let bonus = this.bonus ? this.bonus : 0;
    let total = bonus + this.dice.reduce((a, b) => a + b, 0); 
    this.dispatchEvent(new CustomEvent('result', {
        bubbles: true, 
        detail: { total, bonus, skill: this.skill },
      }
    ));
    return total;
  }

  render() {
    return html`
      <button class="roller" @click="${this.rollDice}">
        <granite-tooltip 
            .position="${this.tooltipPosition}"
            .message="${html`
              <granite-fate-roll 
                  .skill="${this.skill}"
                  .bonus="${this.bonus}"
                  .dice="${this.dice}"
                  .result="${this.result()}"
                  .debug="${this.debug}"></granite-fate-roll>
            `}">
          <span class="result">
            ${ this.result()}
          </span>
        </granite-tooltip>
      </button>
    `;
  }
    
}

window.customElements.define('granite-fate-roller', GraniteFateRoller);