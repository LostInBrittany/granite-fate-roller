import { LitElement, html, css } from 'lit';

export class GraniteFateTooltip extends LitElement {
  static get properties() {
    return {
      heading: { type: Object },
      message: { type: Object },
      tipwidth: { type: String },
      position: { type: String },
      fireonclick: { type: Boolean },
      opened: { type: Boolean },
    };
  }

  constructor() {
    super();

    // property defaults
    this.position = 'top';
  }

  render() {
    let closeBtn;
    let containerStyles = `min-width: ${this.tipwidth}px;`;

    if (this.fireonclick) {
      closeBtn = html`
        <a class="tooltip__close" @click="${this.hideTooltip}">Close</a>
      `;
    }

    return html`
      <div class="${this.opened ? 'tooltip tooltip--active' : 'tooltip'}">
        <div
          class="tooltip__container tooltip__container--${this.position}"
          style="${containerStyles}">
          <div class="tooltip__popup">
            <header class="tooltip__heading">${this.heading}</header>
            <div class="tooltip__message">
              ${this.message}
            </div>
          </div>
          ${closeBtn}
        </div>
        <div
          class="tooltip__trigger"
          @mouseover="${() => {
            this.fireonclick ? '' : this.showTooltip();
          }}"
          @mouseout="${() => {
            this.fireonclick ? '' : this.hideTooltip();
          }}"
          @click="${() => {
            this.fireonclick ? this.showTooltip() : '';
          }}">
          <slot></slot>
        </div>
      </div>
    `;
  }

  hideTooltip() {
    this.opened = false;
  }

  showTooltip() {
    this.opened = true;
  }

  toggleTooltip() {
    this.opened = !this.opened;
  }

  static get styles() {
    return [      
      css`
      :host {
        font-size: 12px;
      }
      ::slotted(*) {
        font-size: 100%;
      }
      .tooltip {
        position: relative;
        z-index: unset;
        display: inline-block;
      }
      .tooltip__container {
        color: gray;
        line-height: 2;
        display: none;
        position: absolute;
        z-index: 9999;
      }
      .tooltip__container--bottom {
        top: calc(100% + 1rem);
        left: 50%;
        transform: translateX(-50%);
        animation: tooltip-fade 1s, tooltip-slide-bottom 0.5s ease;
      }
      .tooltip__container--top {
        bottom: calc(100% + 1rem);
        left: 50%;
        transform: translateX(-50%);
        animation: tooltip-fade 1s, tooltip-slide-top 0.5s ease;
      }
      .tooltip__container--left {
        right: calc(100% + 2rem);
        top: 50%;
        transform: translateY(-50%);
        animation: tooltip-fade 1s, tooltip-slide-left 0.5s ease;
      }
      .tooltip__container--right {
        left: calc(100% + 1rem);
        top: 50%;
        transform: translateY(-50%);
        animation: tooltip-fade 1s, tooltip-slide-right 0.5s ease;
      }
      .tooltip__trigger {
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      .tooltip__popup {
        text-align: center;
        padding: 0.5rem;
        position: relative;
        z-index: 2;
        background: #f0f0f0;
        box-shadow: 5px 5px 6px 0px rgba(50, 50, 50, 0.25);
      }
      .tooltip__heading {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
      }
      .tooltip__close {
        text-decoration: underline;
        color: gray;
        cursor: pointer;
        border: 0;
        position: absolute;
        bottom: 1rem;
        left: 50%;
        z-index: 4;
        background: transparent;
        transform: translateX(-50%);
      }
      .tooltip--active .tooltip__container {
        display: block;
      }
      @keyframes tooltip-fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes tooltip-slide-bottom {
        from {
          top: 100%;
        }
        to {
          top: calc(100% + 1rem);
        }
      }
      @keyframes tooltip-slide-top {
        from {
          bottom: 100%;
        }
        to {
          bottom: calc(100% + 1rem);
        }
      }
      @keyframes tooltip-slide-left {
        from {
          right: 100%;
        }
        to {
          right: calc(100% + 1rem);
        }
      }
      @keyframes tooltip-slide-right {
        from {
          left: 100%;
        }
        to {
          left: calc(100% + 1rem);
        }
      }
    `]
  }
}

customElements.define('granite-fate-tooltip', GraniteFateTooltip);