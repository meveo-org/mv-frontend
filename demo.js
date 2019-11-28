import { LitElement, html, css } from "lit-element";
import "mv-menu-panel";
import "mv-toast";
import "mv-toast-demo";
import "mv-linear-icon";

export class MvFrontendDemo extends LitElement {
  static get properties() {
    return {
      selectedDemo: { type: String, reflect: true, attribute: false }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-toast {
        margin: 5px;
      }

      .main-content {
        margin-left: 350px;
      }

      .toasts-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;        
      }
    `;
  }

  render() {
    return html`
    <mv-menu-panel menu showLabel>      
      <mv-menu-panel label>Meveo</mv-menu-panel>
    </mv-menu-panel>
    <div class="main-content">
      <h1>Meveo Frontend Kitchen Sink Demo</h1>

      <div class="toasts-container">
        <mv-toast>Default parameters</mv-toast>
        <mv-toast type="information">type: "information"</mv-toast>
      </div>
      <div class="icons-container">
        <mv-linear-icon icon="heart"></mv-linear-icon> Heart icon
      </div>
    </div>    
    `;
  }
}

customElements.define("mv-frontend-demo", MvFrontendDemo);
