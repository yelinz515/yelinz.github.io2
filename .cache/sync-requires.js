
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/yelinz515/yelinz515.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/yelinz515/yelinz515.github.io/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/yelinz515/yelinz515.github.io/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/yelinz515/yelinz515.github.io/src/templates/blog-post.js"))
}

