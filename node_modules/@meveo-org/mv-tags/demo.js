import { LitElement, html, css } from "lit";
import "@meveo-org/mv-container";
import "./mv-tags.js";

export class MvTagsDemo extends LitElement {
  static get properties() {
    return {
      tags: { type: Array, attribute: false, reflect: true },
      detail: { type: Object, attribute: false, reflect: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .tags {
        margin-top: 10px;
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
    `;
  }

  constructor() {
    super();
    this.tags = ["abc", "123"];
    this.detail = {};
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
        <h3>.tags="$ {["abc", "123"]}"</h3>
        <mv-tags
          .tags="${this.tags}"
          @add-tag="${this.updateTags}"
          @remove-tag="${this.removeTags}"
          placeholder="Enter tags..."
          .theme="${theme}"
        ></mv-tags>
        <div class="tags">
          <b>Tags : </b>
          <ul>
            ${this.tags.map(
              value =>
                html`
                  <li>${JSON.stringify(value)}</li>
                `
            )}
          </ul>
        </div>
        <div class="tags">
          <b>Data : </b>${JSON.stringify(this.detail, null, 2)}
        </div>
      </mv-container>
    `;
  }

  removeTags = event => {
    const { detail } = event;
    const { value } = detail;
    const shouldRemove = confirm(`Remove tag: ${value}?`);
    if (shouldRemove) {
      this.updateTags(event);
    }
  };

  updateTags = event => {
    const { detail } = event;
    const { tags } = detail;
    this.tags = [...tags];
    this.detail = detail;
  };

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-tags-demo", MvTagsDemo);
