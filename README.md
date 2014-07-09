# stylesheet-colors [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Get a unique list of all the colors used in your current page's stylesheets.

## Usage

[![NPM](https://nodei.co/npm/stylesheet-colors.png)](https://nodei.co/npm/stylesheet-colors/)

### colors = getColors([stylesheet(s)])

Returns an array of colors found in your stylesheets, e.g.:

``` javascript
[
  'rgb(25, 25, 25)',
  'rgba(35, 25, 25, 0.2)'
]
```

Optionally you can pass in your own selection of stylesheets from
`document.styleSheets` or an individual one – by default all of the current
page's stylesheets will be used.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/stylesheet-colors/blob/master/LICENSE.md) for details.
