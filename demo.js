import { LitElement, html, css } from "lit-element";
import "mv-menu-panel";
import "mv-toast-demo";
import "mv-linear-icon-demo";

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

      .main-content {
        margin-left: 350px;
      }

      small {
        font-size: 12px;
      }

      mv-menu-panel[label] {
        display: block;
        width: 100%;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.demos = {
      "mv-toast": html`<mv-toast-demo></mv-toast-demo>`,
      "mv-linear-icons": html`<mv-linear-icon-demo></mv-linear-icon-demo>`
    };
  }

  render() {
    return html`
    <mv-menu-panel menu showLabel @select-header="${() => {
      this.selectedDemo = null;
    }}">      
      <mv-menu-panel label>Menu <small>(using mv-menu-panel)</small></mv-menu-panel>
      ${Object.keys(this.demos).map(
        key => html`
        <mv-menu-panel
          item
          .value="${key}"
          .selected="${this.selectedDemo === key}"
          @select-item="${this.handleMenuSelect}"
        >${key}</mv-menu-panel>
      `
      )}
      <mv-menu-panel group>
        <mv-menu-panel label>Multi-level menu</mv-menu-panel>
        <mv-menu-panel item disabled>1.1 <small>(disabled)</small></mv-menu-panel>
        <mv-menu-panel item selected>1.2 <small>(selected)</small></mv-menu-panel>
        <mv-menu-panel group>
          <mv-menu-panel label>1.3</mv-menu-panel>
          <mv-menu-panel item>1.3.1</mv-menu-panel>
          <mv-menu-panel item>1.3.2</mv-menu-panel>
          <mv-menu-panel item>1.3.3</mv-menu-panel>
          <mv-menu-panel item>1.3.4</mv-menu-panel>
          <mv-menu-panel group>
            <mv-menu-panel label>1.3.5</mv-menu-panel>
            <mv-menu-panel item>1.3.5.1</mv-menu-panel>
            <mv-menu-panel item>1.3.5.2</mv-menu-panel>
          </mv-menu-panel>
        </mv-menu-panel>
      </mv-menu-panel>
    </mv-menu-panel>
    <div class="main-content">
      <h1>Meveo Frontend Kitchen Sink Demo</h1>
      ${Object.keys(this.demos).map(
        key => (key === this.selectedDemo ? this.demos[key] : html``)
      )}
      ${!this.selectedDemo
        ? html`
            <div>
              This is the demo page for Meveo Framework components. <br />
              Select a component from the menu to see it in action.
            </div>`
        : html``}
    </div>    
    `;
  }

  handleMenuSelect(event) {
    const { detail: { value } } = event;
    this.selectedDemo = value;
  }
}

customElements.define("mv-frontend-demo", MvFrontendDemo);
