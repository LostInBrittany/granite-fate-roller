import { LitElement, html, css, internalProperty } from 'lit-element';
import dateDiceStyles from './granite-fate-styles';

export class GraniteFateRoll extends LitElement {
  
  static get styles() {
    return [ 
      dateDiceStyles,
      css`
      :host {
        display: inline-block;
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
        font-weight: 700;
      }
      .roll {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        font-size: 1.5em;
      }
      .roll-data {
        padding-right: 1em;
        margin-right: 1em;
        border-right: solid 2px #aaa;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }
      .roll-data-skill {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
      }
      .roll-data-dice {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-evenly;
      }
      .die {
        margin-left: 0.25em;
        margin-right: 0.25em;
        width: 1.5em;
        height: 1.5em;
        font-weight: 900;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
      .roll-result {
        flex-flow: column nowrap;
        align-items: center;
      }
      .result {
        height: 1.5em;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
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
      result: {
        type: Number
      },
      debug: {
        type: Boolean,
      }
    };
  }

  die(value) {
    if (value > 0) {
      return html`<div class="fate-dice-plus"></div>`;
    }
    if (value < 0) {
      return html`<div class="fate-dice-minus"></div>`;
    } 
    return html`<div class="fate-dice-blank"></div>`;;
  }

  render() {
    return html`
      <div class="roll">
        <div class="roll-data">
          <div class="roll-data-description">
            Roll
            ${
              this.skill != "" 
              ? html`: ${this.skill}`
              : ''
            }
          </div>
          <div class="roll-data-dice">
              ${
                this.skill != "" 
                ? html`${this.bonus}+`
                : ''
              }
              <div class="die">${this.die(this.dice[0])}</div> + 
              <div class="die">${this.die(this.dice[1])}</div> +
              <div class="die">${this.die(this.dice[2])}</div> +
              <div class="die">${this.die(this.dice[3])}</div> 
          </div>
        </div>
        <div class="roll-result">
          <div class="roll-result-description">Result</div>
          <div class="roll-result-value">
            ${this.result}
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('granite-fate-roll', GraniteFateRoll);