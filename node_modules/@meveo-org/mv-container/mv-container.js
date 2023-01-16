import { LitElement, html, css } from "lit";

export class MvContainer extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --light-background: var(--mv-container-background, #ffffff);
        --dark-background: var(--mv-container-dark-background, #373e48);
        --light-color: var(--mv-container-light-color, #000000);
        --dark-color: var(--mv-container-dark-color, #ffffff);
      }

      section {
        min-width: var(--mv-container-min-width, 300px);
        max-width: var(--mv-container-max-width, 500px);
        min-height: var(--mv-container-min-height, auto);
        max-height: var(--mv-container-max-height, auto);
        margin: var(--mv-container-margin, 20px auto);
        padding: var(--mv-container-padding, 20px);
        border: var(--mv-container-border, 1px solid #bfbfbf);
        border-radius: var(--mv-container-border-radius, 5px);
        top: var(--mv-container-top, 0);
        position: var(--mv-container-position, relative);
        background-color: var(--background-color);
        box-shadow: var(
          --mv-container-shadow,
          0 0 13px 0 rgba(42, 42, 42, 0.65)
        );
        color: var(--color);
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    return html`
      <section class="${this.theme}">
        <slot></slot>
      </section>
    `;
  }
}

customElements.define("mv-container", MvContainer);
