`paper-search-input`
====================

Material Design: [Search]:(https://material.io/guidelines/patterns/search.html)

`<paper-search-input>` is a single line text field to perform search action with Material Design styling and a dynamic layout.

## Usage:

Include `paper-search-input` into your app-toolbar (desktop layout)

```html
  <app-toolbar>
        <paper-icon-button icon="menu"></paper-icon-button>
        <div main-title>App name</div>
        <paper-search-input></paper-search-input>
  </app-toolbar>
```

If you want change dinamically from desktop to mobile layout and vice versa you can use a media query.

```html
    <iron-media-query query="(min-width: 600px)" query-matches="{{layout}}"></iron-media-query>
    ...
    <app-toolbar>
        <paper-icon-button icon="menu"></paper-icon-button>
        <div main-title>App name</div>
        <paper-search-input wide="[[layout]]"></paper-search-input>
    </app-toolbar>
```


## Testing
If you are using **polyserve** navigate to the `test/` directory of your element to run its tests. You can view results in browser console.

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).

Install it via:

```sh
npm install web-component-tester
```

The `wct` tool will run your tests in all the browsers you have installed. Just
run it:

```sh
wct
```

By default, any tests under `test/` will be run. You can override this by
specifying particular files (or globs of files) via `wct path/to/files`.

## License
MIT © fabbricadigitale

