# docsify-waline

![](https://img.shields.io/npm/dt/docsify-waline)

A Docsify comment plugin for docsify that supports pageview statistics.

Pageview statistics rely on [docsify-count](https://github.com/827652549/docsify-count).

English | [简体中文](./README.zh-CN.md)

## Begin

[Import Waline v2](https://waline.js.org/guide/client/import.html)

```html
<script src="https://unpkg.com/@waline/client@v2/dist/waline.js"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/@waline/client@v2/dist/waline.css"
/>
```

Enter [waline official website](https://waline.js.org/en/guide/get-started.html)  
Configure 'database' and 'server' according to the documentation

## Usage

```html
<script>
  window.$docsify = {
    count: {
      language: "", // default:english|chinese
    },
    waline: {
      // Required example：https://your-domain.vercel.app
      serverURL: "https://your-domain.vercel.app",
      // enable pageview count
      pageview: true,
      // ...
      // don't support custom `el` and `path`
    },
  };
</script>

<!--Import me-->
<script src="https://unpkg.com/docsify-waline@2/docsify-waline.min.js"></script>
```
