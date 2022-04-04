# docsify-waline

waline 的 docsify 评论插件，支持阅读量统计。

阅读量统计依赖 [docsify-count](https://github.com/827652549/docsify-count).

[English](README.md) | 简体中文

## 开始之前

进入 [waline 官网](https://waline.js.org/guide/get-started.html)  
根据文档配置好 `数据库` 和 `服务端`

## 使用

```html
<script>
  window.$docsify = {
    count: {
      language: "", // chinese 或者 english(:默认)
    },
    waline: {
      serverURL: "https://your-domain.vercel.app",
      visitor: true,
      // 不支持 el 和 path 参数自定义
    },
  };
</script>

<script src="//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-waline/docsify-waline.min.js"></script>
```
