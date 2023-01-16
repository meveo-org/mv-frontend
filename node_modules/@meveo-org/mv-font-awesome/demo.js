import { LitElement, html, css } from "lit";
import "./mv-font-awesome.js";
import { SOLID, REGULAR, BRANDS } from "./mv-font-awesome.js";

export class MvFontAwesomeDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .glyph {
        font-size: 16px;
        width: 15em;
        padding: 0.5em 0;
        margin: 0 2em;
        float: left;
        overflow: hidden;
      }
      
      .mls {
        margin-left: .25em;
      }
      
      .clearfix:before,
      .clearfix:after {
        content: " ";
        display: table;
      }
      
      .clearfix:after {
        clear: both;
      }
      
      .fs1 {
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
      
      .dark {
        background-color: #373E48;
        color: #FFFFFF;
      }
      
      /* sample for overriding style */
      mv-fa {
        font-size: 24px;
      }
      
      .light mv-fa {
        color: #2196F3;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    return html`
      <div class="${this.theme}">
        <fieldset>
          <legend>Theme</legend>
          <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
          <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
        <h2>Solid icons</h2>
        <div class="clearfix">
        ${SOLID.map(
          icon => html`        
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}"></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
        <h2>Regular icons</h2>
        <div class="clearfix">
        ${REGULAR.map(
          icon => html`        
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}" regular></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
        <h2>Brand icons</h2>
        <div class="clearfix">
        ${BRANDS.map(
          icon => html`
          <div class="glyph fs1">
            <div class="clearfix">
              <mv-fa icon="${icon}"></mv-fa>
              <span class="mls"> ${icon}</span>
            </div>
          </div>
        `
        )}
        </div>
      </div>
    `;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-fa-demo", MvFontAwesomeDemo);
