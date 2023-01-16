# mv-dropdown

MvDropdown is a Meveo component (based on lit-element) that renders a dropdown container.

## Features

- Default styling shows a box that displays when interacting with a target element
- Configurable style

## Quick Start

To experiment with the MvDropdown component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the dropdown demo component in demo.js file

## Sample usage

```html
<mv-dropdown
  container                   // indicates the main container of the dropdown
  hover                       // indicates that the dropdown responds to hover events
  toggle                      // indicates whether clicking on the trigger toggles the menu on and off
  justify="left"              // the alignment of the menu, i.e. if set to left, the left side
                              //   of the menu is aligned to the left side of the trigger
  position="bottom"           // indicates where the dropdown appears with respect to the trigger
  theme="light"               // the theme of the dropdown
>
  <mv-dropdown
    trigger                   // indicates that this will contain the trigger
                              //   the trigger can be as simple as a text or can be any element/component.
  >Trigger</mv-dropdown>
  <mv-dropdown
    header                    // indicates that this is a header
    theme="light"
  >Header</mv-dropdown>
  <mv-dropdown
    content                   // indicates that this is the content of the dropdown
    theme="light"
  >
    // dropdown content goes here...
  </mv-dropdown>  
  <mv-dropdown
    footer                    // indicates that this is the footer
  >Footer</mv-dropdown>
</mv-dropdown>
```

`justify` values include:
```
  left, center, right
  default value: left
```

`position` values include:
```
  top, bottom
  default value: bottom
```

`theme` values include:
```
  dark, light
  default value: dark
```

You can also check this [demo](https://dropdown.meveo.org/)
