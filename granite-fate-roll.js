import { LitElement, html, css, internalProperty } from 'lit-element';

export class GraniteFateRoll extends LitElement {
  
  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
        font-weight: 700;
      }
      .roll {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1.5em;
      }
      .roll-skill {
        margin-right: 1em;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }
      .roll-data {
        padding-right: 1em;
        margin-right: 1em;
        border-right: solid 2px #aaa;
        display: flex;
        flex-flow: column nowrap;
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
        border: solid 2px black;
        font-weight: 900;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
      .roll-result {
        margin-right: 2em;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }
      .result {
        height: 1.5em;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }
    `;
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
      debug: {
        type: Boolean,
      }
    };
  }

  die(value) {
    if (value > 0) {
      return "+";
    }
    if (value < 0) {
      return "-";
    }
    return "";
  }

  render() {
    return html`
      <div class="roll">
        ${
          this.skill != "" 
          ? html`
            <div class="roll-skill">
              <h4 class="roll-skillname">${this.skill}</h4>
              <div class="roll-bonus">
                ${this.bonus} 
              </div>
            </div>
          ` 
          : '' 
        }        
        <div class="roll-data">
          <h4>Roll</h4>
          <div class="roll-data-dice">
            ${this.dice.map((item) => {
              return html`<div class="die">${this.die(item)}</div>`
            })}
          </div>
        </div>
        <div class="roll-result">
          <h4>Result</h4>
          <div class="result">
            ${this.result}
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('granite-fate-roll', GraniteFateRoll);