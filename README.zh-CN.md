# docsify-waline

waline 的 docsify 评论插件，支持浏览量统计。

浏览量统计依赖 [docsify-count](https://github.com/827652549/docsify-count).

[English](README.md) | 简体中文

## 开始之前

[导入 Waline v2](https://waline.js.org/guide/client/import.html)

```html
<script src="https://unpkg.com/@waline/client@v2/dist/waline.js"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/@waline/client@v2/dist/waline.css"
/>
```

进入 [waline 官网](https://waline.js.org/guide/get-started.html)  
根据文档配置好 `数据库` 和 `服务端`

## 使用

```html
<script>
  window.$docsify = {
    count: {
      language: "", // default:english|chinese
    },
    waline: {
      // 必填。例子：https://your-domain.vercel.app
      serverURL: "",
      // 开启浏览量统计
      pageview: true,
      // ...
      // 不支持 el 和 path 参数自定义
    },
  };
</script>

<!--导入插件-->
<script src="https://unpkg.com/docsify-waline@2/docsify-waline.min.js"></script>
```
