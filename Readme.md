
# node-scrapeit

Don't think. Scrape.

## Look how easy this is

```js
var scrape = require('scrapeit')

scrape("http://google.com", function(err, o, dom){
  o("p").forEach(function(p){
    // scrape all p tags
  });
});
```
