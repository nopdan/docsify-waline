# docsify-waline

A Docsify comment plugin for docsify that supports visitor statistics.

Visitor statistics rely on [docsify-count](https://github.com/827652549/docsify-count).

English | [简体中文](./README.zh-CN.md)

## Begin

Enter [waline official website](https://waline.js.org/en/guide/get-started.html)  
Configure 'database' and 'server' according to the documentation

## Usage

```html
<script>
  window.$docsify = {
    count: {
      language: "", // chinese or english(:default)
    },
    waline: {
      serverURL: "https://your-domain.vercel.app",
      visitor: true,
      // not support custom `el` and `path`
    }
  }
</script>

<script src="//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-waline/docsify-waline.min.js"></script>
```
