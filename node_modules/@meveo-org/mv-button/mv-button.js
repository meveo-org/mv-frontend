import { LitElement, html, css } from "lit";

export class MvButton extends LitElement {
  static get properties() {
    return {
      visible: { type: Boolean, attribute: true },
      selected: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },

      //  valid type values are: "default", "circle", "rounded", or "outline"
      type: { type: String, attribute: true },

      //  valid button-style values are: "success", "error", "info", or "cancel"
      //  default: "success"
      "button-style": { type: String, attribute: true },

      //  TODO - not yet implemented
      //  valid fill values are: "solid", "transparent", "gradient"
      //  default: "solid"
      fill: { type: String, attribute: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --font-size: var(--mv-button-font-size, 1rem);
        --circle-button-size: var(--mv-button-circle-button-size, 55px);
        --button-margin: var(--mv-button-margin, 5px);
        --button-padding: var(--mv-button-padding, 10px 30px);
        --button-min-width: var(--mv-button-min-width, 120px);
        --button-max-width: var(--mv-button-max-width);
        --button-width: var(--mv-button-width);
        --rounded-radius: var(--mv-button-rounded-radius, 50px);
        --color: var(--mv-button-color, #ffffff);
        --button-color: var(--mv-button-custom-color);
        --button-hover-color: var(--mv-button-hover-custom-color)
        --hover-color: var(--mv-button-custom-hover-color);
        --button-disabled-border-color: var(--mv-button-disabled-border-color, #bbbfce !important)
      }
      button {
        font-family: var(--font-family, Arial);
        min-width: var(--button-min-width);
        max-width: var(--button-max-width);
        width: var(--button-width);
        font-size: var(--font-size);
        margin: var(--button-margin);
      }
      button.success:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.error:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.info:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.cancel:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color:  #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button:focus {
        outline: none;
      }
      button:hover:not([disabled]) {
        cursor: pointer;
      }
      button.circle {
        min-width: var(--circle-button-size);
        max-width: var(--button-max-width);
        width: var(--button-width);
        height: var(--circle-button-size);
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: var(--mv-button-circle-color, #80828c);
        border-radius: 50%;
        box-shadow: unset;
        border: none;
      }
      button.circle:hover:not([disabled]) {
        cursor: pointer;
        color: var(--button-hover-color, #1d9bc9);
        border: var(--mv-button-border,1px solid var(--button-color, #1d9bc9));
        background-color: var(--mv-button-custom-hover-color, #ffffff);
        box-shadow: var(--mv-button-box-shadow,
          inset 0px 0px 9px 0px rgba(29, 155, 201, 0.3)
          );
      }
      button.circle.selected,
      button.circle.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #008fc3);
        box-shadow: 0px 0px 10px 0px rgba(0, 143, 195, 0.6);
        z-index: 100;
      }
      button.circle:disabled {
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: #cacbd2;
        z-index: 100;
      }
      button.default {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
      }
      button.default.success {
        color: var(--color);
        border-color: var(--button-color, #54ca95);
        background-color: var(--button-color, #54ca95);
      }
      button.default.success:hover:not([disabled]) {
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.default.error {
        color: #ffffff;
        border-color: var(--button-color, #dd5c55);
        background-color: var(--button-color, #dd5c55);
      }
      button.default.error:hover:not([disabled]) {
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.default.info {
        color: #ffffff;
        border-color: var(--button-color, #3999c1);
        background-color: var(--button-color, #3999c1);
      }
      button.default.info:hover:not([disabled]) {
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.default.cancel {
        color: #ffffff;
        border-color: var(--button-color, #bbbfce);
        background-color: var(--button-color, #bbbfce);
      }
      button.default.cancel:hover:not([disabled]) {
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.outline.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.outline.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.outline.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.outline.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.outline.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.outline.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.outline.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.outline.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline.success.selected,
      button.outline.success.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #0ca361);
      }
      button.outline.error.selected,
      button.outline.error.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #e71919);
      }
      button.outline.info.selected,
      button.outline.info.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #3999c1);
      }
      button.outline.cancel.selected,
      button.outline.cancel.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #9297a6);
      }
      button.rounded {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--rounded-radius);
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.rounded.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.rounded.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.rounded.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.rounded.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.rounded.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.rounded.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.rounded.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.rounded.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
    `;
  }

  constructor() {
    super();
    this.visible = true;
    this.selected = false;
    this.disabled = false;
    this.type = "default";
    this["button-style"] = "success";
    this.theme = "light";
  }

  render() {
    const buttonStyle = this.type !== "round" ? ` ${this["button-style"]}` : "";
    const selectedClass = this.selected ? " selected" : "";
    const buttonClass = `${this.type}${buttonStyle}${selectedClass}`;
    return !!this.visible
      ? html`
          <button
            class="${buttonClass} ${this.theme}"
            @click="${this.handleClick}"
            ?disabled="${this.disabled}"
          >
            <slot> </slot>
          </button>
        `
      : html``;
  }

  handleClick = () => {
    this.dispatchEvent(new CustomEvent("button-clicked"));
  };
}

customElements.define("mv-button", MvButton);
