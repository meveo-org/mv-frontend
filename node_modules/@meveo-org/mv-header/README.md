# mv-header

 MvHeader is a Meveo component (based on lit-element) that renders a header component that can be used with [mv-main](https://github.com/meveo-front/mv-main).

## Features
* Configurable item positions: `left`, `right`, `center`, default: `left`
* Can render custom headers

## Quick Start

To experiment with the MvHeader component.   

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself) 

3. Update the header demo component in demo.js file

## Sample usage
```html
<mv-header>
  <mv-header item><a href="#">Breadcrumb</a> > path</mv-header>
  <mv-header item><div class="styled">Styled Text</div></mv-header>
  <mv-header item position="center"><h1>MvHeader</h1></mv-header>
  <mv-header item position="center"><small>(full width)</small></mv-header>
  <mv-header item position="right">Admin User</mv-header>
  <mv-header item position="right">
    <mv-button><mv-fa icon="cog"></mv-fa></mv-button>
  </mv-header>
</mv-header>
```

You can also check this [demo](https://header.meveo.org/)
