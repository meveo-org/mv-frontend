# mv-select

MvSelect is a Meveo component (based on lit-element) that renders a select input.

## Features

- Renders the select a single component tag
- Can render both string and html template as the option label

## Dependencies

- [mv-click-away](https://github.com/meveo-org/mv-click-away)

## Quick Start

To experiment with the MvSelect component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)
3. Update the code in the demo.js file

You can also check this [demo](https://select.meveo.org/)

## Sample usage

```html
<mv-select
  .value="${this.value}"                            // the current selected value
  .options="${this.options}"                        // the options for the dropdown
  @select-option="${event => {...}}"                // the custom event dispatched when an option is selected
  @on-search="${event => {...}}"                    // the custom event dispatched when a search term is typed in
  @on-clear="${event => {...}}"                     // the custom event dispatched when the selected option is cleared
  @change="${this.removeValues('multiSelect')}"     // the custom event dispatched when the selected option is removed in multiselect
  always-open                                       // sets the dropdown to be always open
  searchable                                        // sets the input to be searchable
  has-empty-option                                  // shows an empty option at the top of the options list
  no-clear-button                                   // removes the clear button on the input
  multi-select                                      // option for multiselect
></mv-select>
```

The options has the following properties:

```javascript
{
  label, // string or html template to render as the label
  value // object value of the option
}
```
