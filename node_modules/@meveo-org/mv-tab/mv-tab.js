import { LitElement, html, css } from "lit";

export class MvTab extends LitElement {
  static get properties() {
    return {
      key: { type: String, attribute: true },
      group: { type: Boolean, attribute: true },
      tab: { type: Boolean, attribute: true },
      content: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },
      active: { type: Boolean, reflect: true },
      selected: { type: String, reflect: true },

      //  valid type values are: "rounded", "icon"
      //    default: "header"
      type: { type: String, attribute: true },
      first: { type: Boolean, attribute: true },
      last: { type: Boolean, attribute: true },
      total: { type: Number, attribute: true },
      lastItem: { type: String, attribute: true },
      firstItem: { type: String, attribute: true },
      parentType: { type: String, attribute: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --mv-tab-font-family: var(--font-family, Arial);
        --mv-tab-font-size: var(--font-size-m, 1rem);
        --padding-bottom: var(--mv-tab-padding-bottom, 0px);
        --width: var(--mv-tab-width, 100%);
        --header-font-size: var(--font-size-m, 1rem);
        --header-padding: var(--mv-tab-header-padding, 8px);
        --header-border-radius: var(--mv-tab-header-border-radius, 5px);
        --header-light-background: var(
          --mv-tab-header-light-background,
          #dfe7ee
        );
        --header-active-light-background: var(
          --mv-tab-header-active-light-background,
          radial-gradient(circle, #007adf 0%, #00ec76 180%)
        );
        --header-first-active-light-background: var(
          --mv-tab-header-first-active-light-background,
          linear-gradient(to right, #007adf 0%, #00ec76 180%)
        );
        --header-last-active-light-background: var(
          --mv-tab-header-last-active-light-background,
          linear-gradient(to left, #007adf 0%, #00ec76 180%)
        );
        --header-border-light-color: var(
          --mv-tab-header-border-light-color,
          #99d2e7
        );
        --header-light-color: var(--mv-tab-header-light-color, #67afd3);
        --header-active-light-color: var(
          --mv-tab-header-active-light-color,
          #ffffff
        );
        --header-dark-background: var(--mv-tab-header-dark-background, #dfe7ee);
        --header-active-dark-background: var(
          --mv-tab-header-active-dark-background,
          radial-gradient(circle, #4e686d 0%, #00ec76 180%)
        );
        --header-first-active-dark-background: var(
          --mv-tab-header-first-active-dark-background,
          linear-gradient(to right, #4e686d 0%, #00ec76 180%)
        );
        --header-last-active-dark-background: var(
          --mv-tab-header-last-active-dark-background,
          linear-gradient(to left, #4e686d 0%, #00ec76 180%)
        );
        --header-border-dark-color: var(
          --mv-tab-header-border-dark-color,
          #99d2e7
        );
        --header-dark-color: var(--mv-tab-header-dark-color, #67afd3);
        --header-active-dark-color: var(
          --mv-tab-header-active-dark-color,
          #ffffff
        );
        --rounded-font-size: var(--mv-rounded-font-size, var(--font-size-m));
        --rounded-padding: var(--mv-rounded-padding, 5px 10px);
        --rounded-height: var(--mv-tab-rounded-height, 51px);
        --rounded-border-radius: var(--mv-tab-rounded-border-radius, 25px);
        --rounded-light-background: var(
          --mv-tab-rounded-light-background,
          #ffffff
        );
        --rounded-active-light-background: var(
          --mv-tab-rounded-active-light-background,
          #007adf
        );
        --rounded-light-color: var(--mv-tab-rounded-light-color, #4e686d);
        --rounded-active-light-color: var(
          --mv-tab-rounded-active-light-color,
          #ffffff
        );
        --rounded-dark-background: var(
          --mv-tab-rounded-dark-background,
          #ffffff
        );
        --rounded-active-dark-background: var(
          --mv-tab-rounded-active-dark-background,
          #4e686d
        );
        --rounded-dark-color: var(--mv-tab-rounded-dark-color, #4e686d);
        --rounded-active-dark-color: var(
          --mv-tab-rounded-active-dark-color,
          #ffffff
        );
        --icon-font-size: var(--font-size-m, 1rem);
        --icon-size: var(--mv-tab-icon-size, 29px);
        --icon-border-radius: var(--mv-tab-icon-border-radius, 5px);
        --icon-border: var(
          --mv-tab-icon-border,
          1px solid var(--icon-background-color-active)
        );
        --icon-margin: var(--mv-tab-icon-margin, 0 5px);
        --icon-justify-items: var(--mv-tab-icon-justify, flex-end);
        --icon-dark-background: var(--mv-tab-icon-dark-background, #ffffff);
        --icon-active-dark-background: var(
          --mv-tab-icon-active-dark-background,
          #4e686d
        );
        --icon-dark-color: var(--mv-tab-icon-dark-color, #4e686d);
        --icon-active-dark-color: var(--mv-tab-icon-active-dark-color, #ffffff);
        --icon-light-background: var(--mv-tab-icon-light-background, #ffffff);
        --icon-active-light-background: var(
          --mv-tab-icon-active-light-background,
          #007adf
        );
        --icon-light-color: var(--mv-tab-icon-light-color, #007adf);
        --icon-active-light-color: var(
          --mv-tab-icon-active-light-color,
          #ffffff
        );
        --content-light-background: var(
          --mv-tab-content-light-background,
          --b-color,
          rgb(255, 255, 255)
        );
        --content-dark-background: var(
          --mv-tab-content-dark-background,
          #373e48
        );
        --content-light-color: var(--mv-tab-content-light-color, #000000);
        --content-dark-color: var(--mv-tab-content-dark-color, #ffffff);
        z-index: var(--mv-tab-icon-z-index, 0);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-auto-flow: column;
        position: relative;
        font-family: var(--mv-tab-font-family);
        width: max-content;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }

      li[disabled] {
        cursor: unset;
        color: var(--n-color, rgb(105, 109, 110));
        background-color: var(--on-pl-color, rgb(187, 187, 187));
        border-color: var(--nd-color, rgb(187, 187, 187));
      }

      section {
        padding: var(--mv-tab-content-padding, 10px);
        background-color: var(--background-color);
        font-family: var(--mv-tab-font-family);
        font-size: var(--mv-tab-font-size);
        color: var(--color);
      }

      p {
        display: none;
        margin-block-start: unset;
        margin-block-end: unset;
      }

      li.header {
        font-size: var(--header-font-size);
        font-weight: 400;
        box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);
        background: var(--header-background-color);
        color: var(--header-color);
        border: 1px solid var(--header-border-color);
        padding: var(--header-padding);
        overflow: hidden;
        height: 100%;
      }

      li.header:hover {
        box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
      }

      li[active].header {
        font-weight: 700;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        color: var(--header-color-active);
        cursor: default;
        background: var(--header-background-color-active);
      }

      li[first].header {
        border-top-left-radius: var(--header-border-radius);
        border-bottom-left-radius: var(--header-border-radius);
      }

      li[first][active].header {
        background: var(--header-first-background-color-active);
        border: none;
      }

      li[last].header {
        border-top-right-radius: var(--header-border-radius);
        border-bottom-right-radius: var(--header-border-radius);
      }

      li[last][active].header {
        background: var(--header-last-background-color-active);
        border: none;
      }

      ul.rounded {
        position: relative;
      }

      li.rounded {
        font-size: var(--rounded-font-size);
        font-weight: 400;
        color: var(--rounded-color);
        border: solid 1px var(--rounded-active-background-color);
        background: var(--rounded-background-color);
        padding: var(--rounded-padding);
        height: 100%;
      }

      li.rounded:hover {
        box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
      }

      li[first].rounded {
        border-radius: var(--rounded-border-radius) 0 0
          var(--rounded-border-radius);
      }

      li[last].rounded {
        border-radius: 0 var(--rounded-border-radius)
          var(--rounded-border-radius) 0;
      }

      li[active].rounded {
        background: var(--rounded-active-background-color);
        color: var(--rounded-color-active);
        box-shadow: none;
        cursor: default;
      }

      ul.icon {
        display: flex;
        justify-content: var(--icon-justify-items);
        padding: 0;
        margin: 0;
      }

      li.icon {
        border-radius: var(--icon-border-radius);
        width: var(--icon-size);
        height: var(--icon-size);
        background-color: var(--icon-background-color);
        color: var(--icon-color);
        border: var(--icon-border);
        font-size: var(--icon-font-size);
        margin: var(--icon-margin);
      }

      li.icon:hover {
        box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);
      }

      li[active].icon {
        background: var(--icon-background-color-active);
        color: var(--icon-color-active);
        box-shadow: none;
        cursor: default;
      }

      .mv-tab-group {
        display: grid;
      }

      .mv-tab-menu {
        overflow-x: auto;
      }

      .light {
        --header-background-color: var(--header-light-background);
        --header-background-color-active: var(--header-active-light-background);
        --header-first-background-color-active: var(
          --header-first-active-light-background
        );
        --header-last-background-color-active: var(
          --header-last-active-light-background
        );
        --header-border-color: var(--header-border-light-color);
        --header-color: var(--header-light-color);
        --header-color-active: var(--header-active-light-color);
        --rounded-background-color: var(--rounded-light-background);
        --rounded-active-background-color: var(
          --rounded-active-light-background
        );
        --rounded-color: var(--rounded-light-color);
        --rounded-color-active: var(--rounded-active-light-color);
        --icon-background-color: var(--icon-light-background);
        --icon-background-color-active: var(--icon-active-light-background);
        --icon-color: var(--icon-light-color);
        --icon-color-active: var(--icon-active-light-color);
        --background-color: var(--content-light-background);
        --color: var(--content-light-color);
      }

      .dark {
        --header-background-color: var(--header-dark-background);
        --header-background-color: var(--header-dark-background);
        --header-background-color-active: var(--header-active-dark-background);
        --header-first-background-color-active: var(
          --header-first-active-dark-background
        );
        --header-last-background-color-active: var(
          --header-last-active-dark-background
        );
        --header-border-color: var(--header-border-dark-color);
        --header-color: var(--header-dark-color);
        --header-color-active: var(--header-active-dark-color);
        --rounded-background-color: var(--rounded-dark-background);
        --rounded-active-background-color: var(
          --rounded-active-dark-background
        );
        --rounded-color: var(--rounded-dark-color);
        --rounded-color-active: var(--rounded-active-dark-color);
        --icon-background-color: var(--icon-dark-background);
        --icon-background-color-active: var(--icon-active-dark-background);
        --icon-color: var(--icon-dark-color);
        --icon-color-active: var(--icon-active-dark-color);
        --background-color: var(--content-dark-background);
        --color: var(--content-dark-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = "header";
    this.theme = "light";
  }

  render() {
    if (this.group) {
      return html`
        <div class="mv-tab-group ${this.theme}">
          <nav class="mv-tab-menu">
            <ul class="${this.type}">
              <slot name="tab-item"></slot>
            </ul>
          </nav>
          <section class="mv-tab-content">
            <slot name="tab-content"></slot>
          </section>
        </div>
      `;
    } else if (this.tab) {
      this.setAttribute("slot", "tab-item");
      return html`
        <li
          class="${this.type}"
          .value="${this.key}"
          ?first="${this.first}"
          ?last="${this.last}"
          ?disabled="${this.disabled}"
          ?active="${this.active}"
          @click="${this.selectTab}"
        >
          <slot></slot>
        </li>
      `;
    } else if (this.content && this.active) {
      this.setAttribute("slot", "tab-content");
      return html` <slot></slot> `;
    }
    return html``;
  }

  connectedCallback() {
    //initialize
    if (this.group) {
      this.firstItem =
        this.children &&
        this.children[0] &&
        this.children[0].getAttribute("key");
      this.selected = this.selected ? this.selected : this.firstItem;
      this.lastItem =
        this.children &&
        this.children[this.children.length - 1] &&
        this.children[this.children.length - 1].getAttribute("key");
      this.parentType = this.type;
    }
    if (this.tab || this.content) {
      this.active = this.key === this.parentNode.selected;
      this.last = this.key === this.parentNode.lastItem;
      this.first = this.key === this.parentNode.firstItem;
      if (this.parentNode.parentType) {
        this.type = this.parentNode.parentType;
      }
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name, oldval, newval) {
    if (this.group && name === "selected") {
      let oldTabFound = false;
      let oldContentFound = false;
      let newTabFound = false;
      let newContentFound = false;
      for (let child of this.children) {
        const isActive = child.active;
        const isSelected = child.key === this.selected;
        if (oldTabFound && newTabFound && oldContentFound && newContentFound) {
          break;
        }
        if (isActive && !isSelected) {
          oldTabFound = this.tab ? true : oldTabFound;
          oldContentFound = this.content ? true : oldContentFound;
          child.active = false;
        } else if (isSelected) {
          newTabFound = this.tab ? true : newTabFound;
          newContentFound = this.content ? true : newContentFound;
          child.active = true;
        }
      }
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  selectTab = () => {
    if (!this.disabled) {
      this.parentNode.selected = this.key;
      this.dispatchEvent(new CustomEvent("change-tab"));
    }
  };
}

customElements.define("mv-tab", MvTab);
