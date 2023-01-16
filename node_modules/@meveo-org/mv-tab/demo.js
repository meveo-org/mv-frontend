import { LitElement, html, css } from "lit";
import "@meveo-org/mv-container";
import "@meveo-org/mv-font-awesome";
import "./mv-tab.js";

export class MvTabDemo extends LitElement {
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
      
      mv-container {
        --mv-container-min-width: 50%;
        display: inline-block;
      }
      
      .icon {
        --mv-tab-padding-bottom: 20px;
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
    const { theme } = this;
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
        <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
      </fieldset>
      <mv-tab group .theme="${theme}">
        <mv-tab tab key="perimeter-settings">Perimeter settings</mv-tab>
        <mv-tab content key="perimeter-settings">
          <mv-container .theme="${theme}">
            <mv-tab group type="rounded" .theme="${theme}">
              <mv-tab tab key="discovery">Discovery</mv-tab>
              <mv-tab content key="discovery">
                 DISCOVERY
                <mv-tab group class="icon" type="icon" .theme="${theme}">
                  <mv-tab tab key="compress">
                    <mv-fa icon="compress-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="compress">
                    <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
                      which originated because some early operating systems and file systems, such as DOS and the limitations imposed
                      by FAT data structure, limited file extensions to three letters.</p>
                  </mv-tab>
                  <mv-tab tab key="expand">
                    <mv-fa icon="expand-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="expand">
                    <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
                      from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
                      internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
                      large part due to the evolution of JavaScript and other web technologies.</p>
                  </mv-tab>
                </mv-tab>
              </mv-tab>
              
              <mv-tab tab key="monitoring">Monitoring</mv-tab>
              <mv-tab content key="monitoring">
                 MONITORING
                <mv-tab group class="icon" type="icon" .theme="${theme}">
                  <mv-tab tab key="compress">
                    <mv-fa icon="compress-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="compress">
                    <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
                      which originated because some early operating systems and file systems, such as DOS and the limitations imposed
                      by FAT data structure, limited file extensions to three letters.</p>
                  </mv-tab>
                  <mv-tab tab key="expand">
                    <mv-fa icon="expand-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="expand">
                    <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
                      from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
                      internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
                      large part due to the evolution of JavaScript and other web technologies.</p>
                  </mv-tab>
                </mv-tab>
                
              </mv-tab>
            </mv-tab>
          </mv-container>
          
        </mv-tab>
        <mv-tab tab key="brands-products">Brands & Products</mv-tab>
        <mv-tab content key="brands-products">
          <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
            from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
            internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
            large part due to the evolution of JavaScript and other web technologies.</p>
          <p>As the size of CSS resources used in a project increases, a development team often needs to decide on a common
            design methodology to keep them organized. The goals are ease of development, ease of collaboration during
            development and performance of the deployed stylesheets in the browser. Popular methodologies include OOCSS
            (object oriented CSS), ACSS (atomic CSS), oCSS (organic Cascade Style Sheet), SMACSS (scalable and modular
            architecture for CSS), and BEM (block, element, modifier).</p>
          <ul>
            <li>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document
              written in a markup language like HTML.</li>
            <li>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
              This separation can improve content accessibility, provide more flexibility and control in the specification
              of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS
              in a separate .css file, and reduce complexity and repetition in the structural content.</li>
            <li>Separation of formatting and content also makes it feasible to present the same markup page in different
              styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or
              screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the
              content is accessed on a mobile device.</li>
          </ul>
        </mv-tab>
      </mv-tab>
      
      <mv-tab group .theme="${theme}">
        <mv-tab tab key="list">List</mv-tab>
        <mv-tab content key="list">
        
          <mv-container .theme="${theme}">
            <mv-tab group type="rounded" .theme="${theme}">
              <mv-tab tab key="list">List</mv-tab>
              <mv-tab content key="list">
                 LIST
                <mv-tab group class="icon" type="icon" .theme="${theme}">
                  <mv-tab tab key="compress">
                    <mv-fa icon="compress-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="compress">
                    <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
                      which originated because some early operating systems and file systems, such as DOS and the limitations imposed
                      by FAT data structure, limited file extensions to three letters.</p>
                  </mv-tab>
                  <mv-tab tab key="expand">
                    <mv-fa icon="expand-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="expand">
                    <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
                      from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
                      internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
                      large part due to the evolution of JavaScript and other web technologies.</p>
                  </mv-tab>
                </mv-tab>
                  
              </mv-tab>
              <mv-tab tab key="graph">Graph</mv-tab>
              <mv-tab content key="graph">
                 GRAPH
                <mv-tab group class="icon" type="icon" .theme="${theme}">
                  <mv-tab tab key="compress">
                    <mv-fa icon="compress-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="compress">
                    <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
                      which originated because some early operating systems and file systems, such as DOS and the limitations imposed
                      by FAT data structure, limited file extensions to three letters.</p>
                  </mv-tab>
                  <mv-tab tab key="expand">
                    <mv-fa icon="expand-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="expand">
                    <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
                      from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
                      internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
                      large part due to the evolution of JavaScript and other web technologies.</p>
                  </mv-tab>
                </mv-tab>
                
              </mv-tab>
              <mv-tab tab key="map">Map</mv-tab>
              <mv-tab content key="map">
                 MAP
                <mv-tab group class="icon" type="icon" .theme="${theme}">
                  <mv-tab tab key="compress">
                    <mv-fa icon="compress-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="compress">
                    <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
                      which originated because some early operating systems and file systems, such as DOS and the limitations imposed
                      by FAT data structure, limited file extensions to three letters.</p>
                  </mv-tab>
                  <mv-tab tab key="expand">
                    <mv-fa icon="expand-arrows-alt"></mv-fa>
                  </mv-tab>
                  <mv-tab content key="expand">
                    <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
                      from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
                      internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
                      large part due to the evolution of JavaScript and other web technologies.</p>
                  </mv-tab>
                </mv-tab>
                
              </mv-tab>
            </mv-tab>
          </mv-container>
          
        </mv-tab>
        <mv-tab tab key="graph">Graph</mv-tab>
        <mv-tab content key="graph">
          <p>As websites adopt newer code standards that are incompatible with older browsers, these browsers can be cut off
            from accessing many of the resources on the web (sometimes intentionally). Many of the most popular sites on the
            internet are not just visually degraded on older browsers due to poor CSS support, but do not work at all, in
            large part due to the evolution of JavaScript and other web technologies.</p>
          <p>As the size of CSS resources used in a project increases, a development team often needs to decide on a common
            design methodology to keep them organized. The goals are ease of development, ease of collaboration during
            development and performance of the deployed stylesheets in the browser. Popular methodologies include OOCSS
            (object oriented CSS), ACSS (atomic CSS), oCSS (organic Cascade Style Sheet), SMACSS (scalable and modular
            architecture for CSS), and BEM (block, element, modifier).</p>
          <ul>
            <li>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document
              written in a markup language like HTML.</li>
            <li>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
              This separation can improve content accessibility, provide more flexibility and control in the specification
              of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS
              in a separate .css file, and reduce complexity and repetition in the structural content.</li>
            <li>Separation of formatting and content also makes it feasible to present the same markup page in different
              styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or
              screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the
              content is accessed on a mobile device.</li>
          </ul>
        </mv-tab>
        <mv-tab tab key="map">Map</mv-tab>
        <mv-tab content key="map">
          <p>The most common filename extension for files containing HTML is .html. A common abbreviation of this is .htm,
            which originated because some early operating systems and file systems, such as DOS and the limitations imposed
            by FAT data structure, limited file extensions to three letters.</p>
          <p>There are two axes differentiating various variations of HTML as currently specified: SGML-based HTML versus
            XML-based HTML (referred to as XHTML) on one axis, and strict versus transitional (loose) versus frameset on the
            other axis.</p>
          <p>To understand the subtle differences between HTML and XHTML, consider the transformation of a valid and
            well-formed XHTML 1.0 document that adheres to Appendix C (see below) into a valid HTML 4.01 document. To make
            this translation requires the following steps:</p>
          <p>Those are the main changes necessary to translate a document from XHTML 1.0 to HTML 4.01. To translate from
            HTML to XHTML would also require the addition of any omitted opening or closing tags. Whether coding in HTML or
            XHTML it may just be best to always include the optional tags within an HTML document rather than remembering
            which tags can be omitted.</p>
          <p>A well-formed XHTML document adheres to all the syntax requirements of XML. A valid document adheres to the
            content specification for XHTML, which describes the document structure.</p>
        </mv-tab>
      </mv-tab>
    `;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-tab-demo", MvTabDemo);
