# mv-chart

MvChart is a Meveo chart component (based on lit-element) that renders a content chart.  This is a component wrapper for [chartjs](https://www.chartjs.org/)

## Quick Start

To experiment with the MvChart component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the chart demo component in demo.js file

## Sample usage

```html
<mv-chart
  .type="${DOUGHNUT_CONFIG.type}"  // can be any of the chartjs chart types
  .data="${DOUGHNUT_CONFIG.data}"  // data properties are in chartjs data type
  .options="${DOUGHNUT_CONFIG.options}" // options are in chartjs options type
  .plugins="${DOUGHNUT_CONFIG.options}" // plugins are in chartjs plugins type
  .theme="${this.theme}" // theme is either "light" or "dark"
></mv-chart>
```

You can also check this [demo](https://chart.meveo.org/)

## Acknowledgement
Uses [chartjs](https://www.chartjs.org/) library for rendering the charts