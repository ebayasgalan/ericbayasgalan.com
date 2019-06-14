// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/Taivnaa/Desktop/github/ericbayasgalan.com/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/Taivnaa/Desktop/github/ericbayasgalan.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/Taivnaa/Desktop/github/ericbayasgalan.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/Taivnaa/Desktop/github/ericbayasgalan.com/.cache/data.json")

