# mv-font-awesome

 MvFontAwesome is a Meveo icon component (based on lit-element) that renders [Font Awesome Free](https://github.com/FortAwesome/Font-Awesome) library icons.

## Features
* Written in vanilla javascript
* Simplifies icon loading from the library using only the icon name without the prefix

## Quick Start

To experiment with the MvFontAwesome component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)
3. Make sure the following style is declared.

   ```html
    <style>
      /* Brands */
      @font-face {
        font-family: 'Font Awesome 5 Brands';
        font-style: normal;
        font-weight: normal;
        font-display: auto;
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.eot");
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.eot?#iefix") format("embedded-opentype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.woff2") format("woff2"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.woff") format("woff"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.ttf") format("truetype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-brands-400.svg#fontawesome") format("svg");
      }

      /* Regular */
      @font-face {
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 400;
        font-display: auto;
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.eot");
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.eot?#iefix") format("embedded-opentype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.woff2") format("woff2"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.woff") format("woff"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.ttf") format("truetype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-regular-400.svg#fontawesome") format("svg");
      }

      /* Solid */
      @font-face {
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 900;
        font-display: auto;
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.eot");
        src: url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.eot?#iefix") format("embedded-opentype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.woff2") format("woff2"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.woff") format("woff"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.ttf") format("truetype"),
          url("{REPLACE_WITH_PATH_TO}/fonts/fa-solid-900.svg#fontawesome") format("svg");
      }
    </style>

    OR

    <link rel="stylesheet" href="node_modules/@meveo-org/mv-font-awesome/fonts.css">
    ```

4. View the index.html to see available icons, then use the component to load the chosen icon e.g.

   ```html
   <mv-fa icon="snowflake"></mv-fa>
   ```

   **Note:** Some solid icons have the same name as regular icons.  To specify that you want to use the regular icons just use:

   ```html
   <mv-fa icon="snowflake" regular></mv-fa>
   ```

## Acknowledgements

* Uses [Font Awesome Free](https://fontawesome.com/icons?d=gallery&m=free) library icons.
