import { LitElement, html, css } from "lit";
import "@meveo-org/mv-container";
import "@meveo-org/mv-font-awesome";
import "./mv-button.js";

export class MvButtonDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Number, attribute: false, reflect: false },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .click-demo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }

      .click-demo * {
        padding: 5px;
      }

      .click-demo-label {
        margin-top: 50px;
        margin-bottom: 0;
      }

      .small-button {
        --mv-button-min-width: 20px;
        --mv-button-padding: 10px;
      }

      .value {
        font-size: 20px;
      }
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius:8px;
        -webkit-border-radius:8px;	
        border-radius:8px;
        color: #818181;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.value = 0;
    this.theme = "light";
  }

  render() {
    const { theme } = this;
    return html`
    <fieldset>
      <legend>Theme</legend>
      <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
      <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
    </fieldset>
    <mv-container .theme="${theme}">
      <div>
        <h3>Button Types</h3>
        <h4>Default</h4>
        <mv-button .theme="${theme}">Success</mv-button>
        <mv-button button-style="error" .theme="${theme}">Error</mv-button>
        <mv-button button-style="info" .theme="${theme}">Info</mv-button>
        <mv-button button-style="cancel" .theme="${theme}">Cancel</mv-button>

        <h4>Circle</h4>
        <mv-button type="circle" .theme="${theme}"><mv-fa icon="plus"></mv-fa></mv-button>
        
        <h4>Rounded</h4>
        <mv-button type="rounded" .theme="${theme}">Success</mv-button>
        <mv-button type="rounded" button-style="error" .theme="${theme}">Error</mv-button>
        <mv-button type="rounded" button-style="info" .theme="${theme}">Info</mv-button>
        <mv-button type="rounded" button-style="cancel" .theme="${theme}">Cancel</mv-button>

        <h4>Outline</h4>
        <mv-button type="outline" .theme="${theme}">Success</mv-button>
        <mv-button type="outline" button-style="error" .theme="${theme}">Error</mv-button>
        <mv-button type="outline" button-style="info" .theme="${theme}">Info</mv-button>
        <mv-button type="outline" button-style="cancel" .theme="${theme}">Cancel</mv-button>
      </div>

      <h3 class="click-demo-label">Click event handling</h3>
      <div class="click-demo">
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(-1)}"
          ?disabled="${this.value < 1}"
          .theme="${theme}"
        >
          <mv-fa icon="minus"></mv-fa>
        </mv-button>
        <div class="value">Current value: ${this.value}</div>
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(1)}"
          .theme="${theme}"
        >
          <mv-fa icon="plus"></mv-fa>
        </mv-button>      
        <p>
          <mv-button
            class="small-button"
            @button-clicked="${this.resetValue}"
            button-style="error"
            .theme="${theme}"
          ><mv-fa icon="undo"></mv-fa></mv-button>
        </p>
      </div>
    </mv-container>
    `;
  }

  changeValue = increment => {
    return () => {
      this.value = this.value + increment;
    };
  };

  resetValue = () => {
    this.value = 0;
  };

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-button-demo", MvButtonDemo);
