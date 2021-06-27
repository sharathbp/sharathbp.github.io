
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/sharathbp/sharathbp.github.io/src/pages/404.js")),
  "component---src-pages-home-js": preferDefault(require("/Users/sharathbp/sharathbp.github.io/src/pages/home.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/sharathbp/sharathbp.github.io/src/pages/index.js"))
}

