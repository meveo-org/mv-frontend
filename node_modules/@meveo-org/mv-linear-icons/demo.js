import { LitElement, html, css } from "lit";
import "./mv-linear-icons.js";
import { ICONS } from "./mv-linear-icons.js";

export class MvLinearIconDemo extends LitElement {
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
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;	
        border-radius: 8px;
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
      mv-lnr {
        font-size: 24px;
      }
      
      .light mv-lnr {
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
      <div class="clearfix ${this.theme}">
        <fieldset>
          <legend>Theme</legend>
          <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
          <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
      ${ICONS.map(
        icon => html`
        <div class="glyph fs1">
          <div class="clearfix">
            <mv-lnr icon="${icon}"></mv-lnr>
            <span class="mls"> ${icon}</span>
          </div>
        </div>
        `
      )}
      </div>    
    `;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-linear-icons-demo", MvLinearIconDemo);
