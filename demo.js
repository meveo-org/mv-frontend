import { LitElement, html, css } from "lit-element";
import "mv-toast";

export class MvFrontendDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      .toasts-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;        
      }

      mv-toast {
        margin: 5px;
      }
    `;
  }

  render() {
    return html`
    <h1>Meveo Frontend Kitchen Sink Demo</h1>
    <div class="toasts-container">
    <mv-toast>Default parameters</mv-toast>
    <mv-toast type="information">type: "information"</mv-toast>
    </div>
    `;
  }
}

customElements.define("mv-frontend-demo", MvFrontendDemo);
