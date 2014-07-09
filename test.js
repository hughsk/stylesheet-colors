var test = require('tape')

test('basic', function(t) {
  var colors = require('./')(document.styleSheets[0])

  t.equal(colors[0], 'rgb(238, 238, 238)')
  t.equal(colors[1], 'rgba(10, 15, 20, 0.2)')
  t.end()
})
