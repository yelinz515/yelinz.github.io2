"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{6525:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return m}});var r=n(7294),l=n(1597),a=n(8771),i=n(8678),s=n(9357),o=n(1721),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=r.createRef(),n.state={status:"pending"},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=document.createElement("script");t.onload=function(){return e.setState({status:"success"})},t.onerror=function(){return e.setState({status:"failed"})},t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","sungchul-p/blog-comments"),t.setAttribute("issue-term","title"),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(t)},n.render=function(){var e=this.state.status;return r.createElement("div",{className:"comments-wrapper"},"failed"===e&&r.createElement("div",null,"Error. Please try again."),"pending"===e&&r.createElement("div",null,"Loading script..."),r.createElement("div",{ref:this.commentsEl}))},t}(r.Component),u=function(e){var t=e.data.markdownRemark;return r.createElement(s.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})},m=function(e){var t,n=e.data,s=n.previous,o=n.next,u=n.site,m=n.markdownRemark,d=e.location,p=(null===(t=u.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(i.Z,{location:d,title:p},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},m.frontmatter.title),r.createElement("p",null,m.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(a.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,s&&r.createElement(l.Link,{to:s.fields.slug,rel:"prev"},"← ",s.frontmatter.title)),r.createElement("li",null,o&&r.createElement(l.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))),r.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9c754637d9c70d1b6e5f.js.map