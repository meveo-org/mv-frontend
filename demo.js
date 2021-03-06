import { LitElement, html, css } from "lit-element";
import "mv-breadcrumbs-demo";
import "mv-button-demo";
import "mv-calendar-demo";
import "mv-chart-demo";
import "mv-checkbox-demo";
import "mv-click-away-demo";
import "mv-container-demo";
import "mv-dialog-demo";
import "mv-dropdown-demo";
import "mv-font-awesome-demo";
import "mv-footer-demo";
import "mv-form-demo";
import "mv-header-demo";
import "mv-input-demo";
import "mv-linear-icons-demo";
import "mv-listbox-demo";
import "mv-main-demo";
import "mv-maps-demo";
import "mv-menu-demo";
import "mv-menu-panel";
import "mv-pagination-demo";
import "mv-progressbar-demo";
import "mv-radio-demo";
import "mv-select-demo";
import "mv-slider-demo";
import "mv-spinner-demo";
import "mv-tab-demo";
import "mv-table-demo";
import "mv-tags-demo";
import "mv-textarea-demo";
import "mv-toast-demo";
import "mv-toggle-demo";
import "mv-tooltip-demo";

export class MvFrontendDemo extends LitElement {
  static get properties() {
    return {
      selectedDemo: { type: String, reflect: true, attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-header-height: 66px;
        --mv-footer-height: 40px;
        --mv-menu-panel-width: 300px;
      }

      small {
        font-size: 12px;
      }

      .items {
        max-height: 600px;
        overflow-y: auto;

        // fallback for firefox
        scrollbar-color: #5a6473 #788394;
        scrollbar-width: thin;
      }

      .items:focus {
        outline: transparent auto 0;
      }

      .items::-webkit-scrollbar {
        width: 14px;
        background-color: #788394;
        border-radius: 10px;
      }

      .items::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5a6473;
      }

      .count {
        color: #000000;
        font-size: 30px;
      }
    `;
  }

  constructor() {
    super();
    this.demos = {
      "mv-breadcrumbs": html`<mv-breadcrumbs-demo></mv-breadcrumbs-demo>`,
      "mv-button": html`<mv-button-demo></mv-button-demo>`,
      "mv-calendar": html`<mv-calendar-demo></mv-calendar-demo>`,
      "mv-chart": html`<mv-chart-demo></mv-chart-demo>`,
      "mv-checkbox": html`<mv-checkbox-demo></mv-checkbox-demo>`,
      "mv-click-away": html`<mv-click-away-demo></mv-click-away-demo>`,
      "mv-container": html`<mv-container-demo></mv-container-demo>`,
      "mv-dialog": html`<mv-dialog-demo></mv-dialog-demo>`,
      "mv-dropdown": html`<mv-dropdown-demo></mv-dropdown-demo>`,
      "mv-font-awesome": html`<mv-fa-demo></mv-fa-demo>`,
      "mv-footer": html`<mv-footer-demo></mv-footer-demo>`,
      "mv-form": html`<mv-form-demo name="mv-form-demo" storage-modes="local"></mv-form-demo>`,
      "mv-header": html`<mv-header-demo></mv-header-demo>`,
      "mv-input": html`<mv-input-demo></mv-input-demo>`,
      "mv-linear-icons": html`<mv-linear-icons-demo></mv-linear-icons-demo>`,
      "mv-listbox": html`<mv-listbox-demo></mv-listbox-demo>`,
      "mv-main": html`<mv-main-demo></mv-main-demo>`,
      "mv-maps": html`<mv-maps-demo></mv-maps-demo>`,
      "mv-menu": html`<mv-menu-demo></mv-menu-demo>`,
      "mv-pagination": html`<mv-pagination-demo></mv-pagination-demo>`,
      "mv-progress-bar": html`<mv-progressbar-demo></mv-progressbar-demo>`,
      "mv-radio": html`<mv-radio-demo></mv-radio-demo>`,
      "mv-select": html`<mv-select-demo></mv-select-demo>`,
      "mv-spinner": html`<mv-spinner-demo></mv-spinner-demo>`,
      "mv-tab": html`<mv-tab-demo></mv-tab-demo>`,
      "mv-table": html`<mv-table-demo></mv-table-demo>`,
      "mv-tags": html`<mv-tags-demo></mv-tags-demo>`,
      "mv-textarea": html`<mv-textarea-demo></mv-textarea-demo>`,
      "mv-toast": html`<mv-toast-demo></mv-toast-demo>`,
      "mv-slider": html`<mv-slider-demo></mv-slider-demo>`,
      "mv-toggle": html`<mv-toggle-demo></mv-toggle-demo>`,
      "mv-tooltip": html`<mv-tooltip-demo></mv-tooltip-demo>`,
    };
  }

  render() {
    const demos = Object.keys(this.demos);
    const count = demos.length;
    return html`
      <mv-main>
        <mv-header slot="header">
          <mv-header item><h3>Meveo Frontend Kitchen Sink Demo</h3></mv-header>
        </mv-header>
        <mv-menu-panel
          slot="menu"
          menu
          show-header
          @select-header="${() => {
            this.selectedDemo = null;
          }}"
        >
          <mv-menu-panel label>
            Menu
            <small>
              <span class="count">${count}</span>modules
              <div>(using mv-menu-panel)</div>
            </small>
          </mv-menu-panel>
          <div class="items">
            ${Array.from(demos)
              .sort()
              .map(
                (key) => html`
                  <mv-menu-panel
                    item
                    .value="${key}"
                    .selected="${this.selectedDemo === key}"
                    @select-item="${this.handleMenuSelect}"
                    >${key}</mv-menu-panel
                  >
                `
              )}
          </div>
          <mv-menu-panel group>
            <mv-menu-panel label>Multi-level menu</mv-menu-panel>
            <mv-menu-panel item disabled
              >1.1 <small>(disabled)</small></mv-menu-panel
            >
            <mv-menu-panel item selected
              >1.2 <small>(selected)</small></mv-menu-panel
            >
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

        ${Object.keys(this.demos).map((key) =>
          key === this.selectedDemo ? this.demos[key] : html``
        )}
        ${!this.selectedDemo
          ? html` <div>
              This is the demo page for Meveo Framework components. <br />
              Select a component from the menu to see it in action.
            </div>`
          : html``}

        <mv-footer slot="footer">
          <mv-footer item>Meveo-Frontend</mv-footer>
        </mv-footer>
      </mv-main>
    `;
  }

  handleMenuSelect(event) {
    const {
      detail: { value },
    } = event;
    this.selectedDemo = value;
  }
}

customElements.define("mv-frontend-demo", MvFrontendDemo);
