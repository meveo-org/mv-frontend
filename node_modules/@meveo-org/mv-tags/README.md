# mv-tags

MvTags is a Meveo component (based on lit-element) that renders an input element that shows tags.

## Quick Start

To experiment with the MvTags component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the tags demo component in demo.js file

## Sample usage

```html
<mv-tags
  .tags="${["XYZ", "987"]}"             // assign tags in an array
  @add-tag="${this.addTag}"             // custom event dispatched when a tag is added
  @remove-tag="${this.removeTag}"       // custom event dispatched when a tag is removed
  placeholder="Enter tag"               // placeholder to show on input
  has-error                             // render with error borders
></mv-tags>
```

You can also check this [demo](https://tags.meveo.org/)

## Acknowledgements
Style and functionality inspired by [simple-tags](https://github.com/kurtobando/simple-tags)
