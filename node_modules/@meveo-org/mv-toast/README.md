# mv-toast

 MvToast is a Meveo component (based on lit-element) that renders a notification container.

## Features
* Very simple component that only requires one tag and property
* Allows custom elements to be used in content section
* Written in vanilla javascript


## Quick Start

To experiment with the MvToast component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)

The `mv-toast` has 3 `type` variants:
```
success, information, and error 
```


You can also check this [demo](https://toast.meveo.org)

The close button can be disabled by declaring
```html
<mv-toast .closeable="${false}"></mv-toast>
```
