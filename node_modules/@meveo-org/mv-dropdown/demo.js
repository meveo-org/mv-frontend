import { LitElement, html, css } from "lit";
import "@meveo-org/mv-container";
import "@meveo-org/mv-button";
import "./mv-dropdown.js";

export class MvDropdownDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true },
      alert: { type: String, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-button-margin: 0;
      }

      mv-container {
        --mv-container-min-width: auto;
        --mv-container-max-width: 900px;
        --mv-container-margin: auto 0;
        --mv-container-padding: 20px 30px;
      }

      .main {
        display: flex;
        flex-direction: column;
        padding: 50px;
      }

      .main > * + * {
        margin-top: 20px;
      }

      .container {
        position: relative;
        width: 900px;
        height: 300px;
      }

      .item {
        position: absolute;
      }

      .top {
        top: 0;
      }

      .middle {
        top: calc(50% - 27px);
      }

      .bottom {
        bottom: 0;
      }

      .left {
        left: 0;
      }

      .center {
        left: calc(50% - 80px);
      }

      .right {
        right: 0;
      }

      .item.left > mv-dropdown {
        --mv-dropdown-trigger-height: 25px;
      }

      .dark .item.left {
        color: #ffffff;
      }

      .item.center > mv-dropdown {
        --mv-dropdown-trigger-height: 58px;
      }

      .item.right > mv-dropdown {
        --mv-dropdown-trigger-height: 60px;
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
        margin-bottom: 20px;
      }

      legend {
        font-weight: 500;
        color: red;
      }

      ul {
        padding: 0;
      }

      li {
        display: block;
        width: 100%;
        padding: 5px;
      }

      li:hover {
        list-style: none;
        display: block;
        background: #1d9bc9;
        color: #ffffff;
      }

      .alert em {
        font-style: normal;
        font-weight: bold;
        padding: 2px 4px;
        background: #cdcdcd;
      }

      .alert.dark em {
        background: #9a9a9a;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
    this.items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
    this.alert = null;
  }

  render() {
    const { theme } = this;
    return html`
      <div class="main">
        <fieldset>
          <legend>Theme</legend>
          <label
            ><input
              type="radio"
              name="theme"
              value="light"
              checked
              @change="${this.changeTheme}"
            />Light</label
          >
          <label
            ><input
              type="radio"
              name="theme"
              value="dark"
              @change="${this.changeTheme}"
            />Dark</label
          >
        </fieldset>
        <mv-container .theme="${theme}">
          <div class="container ${theme}">
            <div class="item top left">
              Test for
              <mv-dropdown
                container
                hover
                justify="left"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 1, "top-left")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 2, "top-left")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item top center">
              <mv-dropdown
                container
                toggle
                justify="center"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button .theme="${theme}">Click</mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Group 1 <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 1, "top-center")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 2, "top-center")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item top right">
              <mv-dropdown
                container
                justify="right"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 1, "top-right")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li @click="${this.detectClick(item, 2, "top-right")}">
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item middle left">
              Test for
              <mv-dropdown
                container
                hover
                justify="left"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "middle-left")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "middle-left")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item middle center">
              <mv-dropdown
                container
                toggle
                justify="center"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button .theme="${theme}">Click</mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Group 1 <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "middle-center")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "middle-center")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item middle right">
              <mv-dropdown
                container
                justify="right"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "middle-right")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "middle-right")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item bottom left">
              Test for
              <mv-dropdown
                container
                hover
                justify="left"
                position="top"
                .theme="${theme}"
              >
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "bottom-left")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "bottom-left")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item bottom center">
              <mv-dropdown
                container
                toggle
                justify="center"
                position="top"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button .theme="${theme}">Click</mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Group 1 <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "bottom-center")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "bottom-center")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item bottom right">
              <mv-dropdown
                container
                justify="right"
                position="top"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 1</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 1, "bottom-right")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Group 2</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    ${this.items.map(
                      item => html`
                        <li
                          @click="${this.detectClick(item, 2, "bottom-right")}"
                        >
                          ${item}
                        </li>
                      `
                    )}
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
          </div>
        </mv-container>
        ${this.alert
          ? html`
              <mv-container .theme="${theme}">
                <div class="alert ${this.theme}">
                  ${this.alert}
                </div>
              </mv-container>
            `
          : html``}
      </div>
    `;
  }

  hideDropdown = event => {
    const { target } = event;
    target.dispatchEvent(
      new CustomEvent("close-mv-dropdown", { bubbles: true })
    );
  };

  detectClick = (item, group, triggerPosition) => event => {
    this.alert = html`
      <em>${item}</em> of <em>Group ${group}</em> from the
      <em>${triggerPosition} dropdown</em> was selected.
    `;
  };

  changeTheme = originalEvent => {
    const {
      target: { value }
    } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-dropdown-demo", MvDropdownDemo);
