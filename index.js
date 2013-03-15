
var select     = require('soupselect').select
  , request    = require('request')
  , htmlparser = require('htmlparser');

var parseHtml = function(body, cb) {
  var handler = new htmlparser.DefaultHandler(cb);
  var parser = new htmlparser.Parser(handler);
  return parser.parseComplete(body);
};

module.exports = function(url, cb) {
  request(url, function(err, resp, body) {
    if (err) return cb(err);
    parseHtml(body, function(err, dom) {
      if (err) return cb(err);
      var o = select.bind(null, dom);
      return cb(null, o, dom);
    });
  });
};
