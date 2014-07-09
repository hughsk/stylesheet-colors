var flat  = require('array-flatten')
var slice = require('sliced')
var uniq  = require('uniq')

module.exports = getColors
module.exports.regex = getRegex

var hex  = '\\#(?:[a-fA-F0-9]{6}|[a-fA-F0-9]{8}|[a-fA-F0-9]{3})'
var rgb  = '(?:rgb|hsl)' + expr(3)
var rgba = '(?:rgb|hsl)a' + expr(4)
var rtxt = [hex, rgb, rgba].join('|')

var regex = getRegex()
function getRegex() {
  return new RegExp(rtxt, 'gi')
}

function getColors(stylesheets) {
  if (stylesheets instanceof CSSStyleSheet) {
    stylesheets = [stylesheets]
  }

  stylesheets = slice(stylesheets || document.styleSheets)
  stylesheets = stylesheets.map(function(sheet) {
    return slice(sheet.rules).map(function(rule) {
      var styles = rule.style
      var colors = []

      for (var i = 0; i < styles.length; i++) {
        var def = rule.style[rule.style[i]]

        def = slice(def.match(regex) || [])
        def = def.filter(function(color) {
          if (color.charAt(0) !== '#') return true
          return !isNaN(parseInt(color.slice(1), 16))
        })

        colors.push(def)
      }

      return colors
    })
  })

  return uniq(flat(stylesheets).map(function(color) {
    return color.toLowerCase()
  }))
}

function expr(n) {
  var e = ''

  for (var i = 0; i < n; i++) {
    if (i) e += '\\,'
    e += '\\s*?[0-9]{1,}\.?[0-9]{0,}\\s*?'
  }

  return '\\(' + e + '\\)'
}
