# docsify-waline

A Docsify comment plugin for docsify that supports pageview statistics.

Pageview statistics rely on [docsify-count](https://github.com/827652549/docsify-count).

English | [简体中文](./README.zh-CN.md)

## Begin

Enter [waline official website](https://waline.js.org/en/guide/get-started.html)  
Configure 'database' and 'server' according to the documentation

## Usage

[Import Waline v2](https://waline.js.org/guide/client/import.html)

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
<script src="https://cdn.jsdelivr.net/npm/docsify-waline@2/docsify-waline.min.js"></script>
```
