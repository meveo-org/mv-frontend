import { LitElement, html, css } from "lit";
import "./mv-toast.js";

export class MvToastDemo extends LitElement {
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

      section {
        display: grid;
        grid-template-columns: auto 1fr 1fr 1fr auto;
      }
  
      mv-toast {
        margin: 0 5px;
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
        margin-bottom: 20px;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    return html`
    <fieldset>
      <legend>Theme</legend>
      <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
      <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
    </fieldset>
    <section>
      <mv-toast type="success" .closeable="${false}" .theme="${this.theme}">
        <ul>
          <li>type: <b>success</b></li>
          <li>closeable: <b>false</b></li>
        </ul>
        Nunc a nisl eget dolor consequat bibendum non id odio. Suspendisse laoreet hendrerit dignissim. Etiam condimentum
        vestibulum neque sit amet tristique. Sed sit amet convallis tortor, sed lacinia mi. Vivamus malesuada semper ante,
        non commodo quam auctor id. Duis vel neque ultricies, volutpat justo ac, posuere mauris. In fermentum sem vitae
        augue pellentesque porta in in erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce id dolor accumsan, feugiat tellus eget, placerat tortor. Donec ullamcorper nisi et dui
        commodo
      </mv-toast>
      <mv-toast type="information" .theme="${this.theme}">
        <h3>Label</h3>
        <pre>{
        "value 1": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 2": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 3": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 4": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 5": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 6": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 7": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 8": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum.",
        "value 9": "Praesent commodo consequat arcu, sit amet condimentum nisl feugiat ac. Nam auctor interdum posuere. Integer ut varius ante. Sed condimentum."
        }</pre>
      </mv-toast>

      <mv-toast type="error" .theme="${this.theme}">
        Nunc a nisl eget dolor consequat bibendum non id odio. Suspendisse laoreet hendrerit dignissim. Etiam condimentum
        vestibulum neque sit amet tristique. Sed sit amet convallis tortor, sed lacinia mi. Vivamus malesuada semper ante,
        non commodo quam auctor id. Duis vel neque ultricies, volutpat justo ac, posuere mauris. In fermentum sem vitae
        augue pellentesque porta in in erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce id dolor accumsan, feugiat tellus eget, placerat tortor. Donec ullamcorper nisi et dui
        commodo
      </mv-toast>
    </section>   
    `;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-toast-demo", MvToastDemo);
