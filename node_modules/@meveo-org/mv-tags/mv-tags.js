import { LitElement, html, css } from "lit";

export class MvTags extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true, reflect: true },
      tags: { type: Array, attribute: false, reflect: true },
      focus: { type: Boolean, attribute: false, reflect: true },
      hasError: { type: Boolean, attribute: "has-error", reflect: true },
      placeholder: { type: String, attribute: true },
      required: { type: Boolean, attribute: true, reflect: true },
      immediate: { type: Boolean, attribute: true, reflect: true },

      //  valid theme values are: "light", "dark"
      //    default: "light"
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, MuseoSans);
        font-size: var(--font-size-m, 16px);
        --color: var(--mv-tags-color, #818181);
        --min-width: var(--mv-tags-min-width, auto);
        --max-width: var(--mv-tags-max-width, auto);
        --margin: var(--mv-tags-margin, 0);
        --border: var(--mv-tags-border, 1px solid #4e686d);
        --active-border: var(--mv-tags-active-border, 1px solid #1d9bc9);
        --placeholder-color: var(--mv-tags-placeholder-color, #c8c6c6);
        --required-placeholder-color: var(
          --mv-tags-required-placeholder-color,
          #818181
        );
        --active-box-shadow: var(
          --mv-tags-active-box-shadow,
          inset 0 0 9px 0 rgba(29, 155, 201, 0.3)
        );
        --error-border: var(
          --mv-tags-error-border,
          1px solid rgba(247, 112, 98, 1)
        );
        --error-box-shadow: var(
          --mv-tags-error-box-shadow,
          inset 0 0 9px 0 rgba(229, 47, 47, 0.3)
        );
        --border-radius: 5px;
        --light-background: var(--mv-tags-light-background, #1e87f0);
        --dark-background: var(--mv-tags-dark-background, #373e48);
      }

      a:hover {
        cursor: pointer;
      }

      .mv-tags {
        border: var(--border);
        margin: var(--margin);
        min-width: var(--min-width);
        max-width: var(--max-width);
        padding: var(--mv-tags-padding, 4px 8px);
        display: flex;
        flex-wrap: wrap;
        border-radius: var(--border-radius);
        background-color: #ffffff;
      }

      .mv-tags:hover,
      .mv-tags.focus {
        border: var(--active-border);
        box-shadow: var(--active-box-shadow);
      }

      .mv-tags.error,
      .mv-tags.error:hover,
      .mv-tags.error.focus {
        border: var(--error-border);
      }

      .mv-tags.error:hover,
      .mv-tags.error.focus {
        box-shadow: var(--error-box-shadow);
      }

      .mv-tags > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        min-width: var(--min-width);
        max-width: var(--max-width);
      }

      .mv-tags ul li {
        margin: 0.2em;
        padding: 0.3em 0.5em;
        color: #fff;
        background-color: var(--background-color);
        border-radius: 5px;
      }

      .mv-tags ul li a {
        margin: 0.4em 0.2em;
        text-decoration: none;
        color: inherit;
      }

      .mv-tags input {
        margin: 0.4em 0.3em;
        padding: 0;
        box-sizing: border-box;
        flex-grow: 1;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: var(--color);
        min-width: var(--min-width);
        max-width: var(--max-width);
      }

      ::placeholder {
        color: var(--placeholder-color);
        font-weight: 100;
      }

      .required::placeholder {
        font-weight: 700;
        color: var(--required-placeholder-color);
      }

      .light {
        --background-color: var(--light-background);
      }

      .dark {
        --background-color: var(--dark-background);
      }
    `;
  }

  constructor() {
    super();
    this.value = "";
    this.tags = [];
    this.placeholder = "";
    this.focus = false;
    this.hasError = false;
    this.required = false;
    this.immediate = false;
    this.theme = "light";
  }

  render() {
    const hasTags = this.tags && this.tags.length > 0;
    const focusClass = this.focus ? " focus" : "";
    const errorClass = this.hasError ? " error" : "";
    const componentClass = `mv-tags${focusClass}${errorClass}`;
    return html`
      <div class="${componentClass} ${this.theme}">
        <ul>
          ${hasTags
            ? this.tags.map(
                (tag, index) => html`
                  <li>${tag}<a @click="${this.removeTag(index)}">×</a></li>
                `
              )
            : html``}
        </ul>
        <input
          @keyup="${this.inputChange}"
          @focusin="${this.focusInInput}"
          @focusout="${this.focusOutInput}"
          .value="${this.value}"
          placeholder="${this.placeholder}"
          class="${this.required ? "required" : ""}"
        />
      </div>
    `;
  }

  focusInInput = () => {
    this.focus = true;
  };

  focusOutInput = (event) => {
    const {
      target: { value },
    } = event;
    const hasValue = !!value.trim();
    if (this.immediate && hasValue) {
      this.value = "";
      this.dispatchEvent(
        new CustomEvent("add-tag", {
          detail: {
            tags: [...this.tags, value],
            value,
            index: this.tags.length,
          },
        })
      );
    }
    this.focus = false;
  };

  inputChange = (event) => {
    const {
      target: { value },
    } = event;
    const hasValue = !!value.trim();
    const hasTags = this.tags && this.tags.length > 0;
    const isComma = event.key === ",";
    const isEnter = event.key === "Enter" || isComma;
    const isBackspace = event.key === "Backspace";
    if (isEnter && hasValue) {
      const tags = [...this.tags, isComma ? value.replace(",", "") : value];
      this.value = "";
      this.dispatchEvent(
        new CustomEvent("add-tag", {
          detail: { tags, value, index: this.tags.length },
        })
      );
    } else if (isBackspace && hasTags && !hasValue) {
      this.removeTag(this.tags.length - 1)();
    } else {
      this.value = value;
      this.dispatchEvent(
        new CustomEvent("change-tag", {
          detail: { value },
        })
      );
    }
  };

  removeTag = (index) => () => {
    const tags = [...this.tags.slice(0, index), ...this.tags.slice(index + 1)];
    this.dispatchEvent(
      new CustomEvent("remove-tag", {
        detail: { tags, value: this.tags[index], index },
      })
    );
  };
}

customElements.define("mv-tags", MvTags);
