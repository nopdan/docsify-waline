
# docsify-waline

A simple comment plugin for docsify.

## 开始之前

进入 [waline 官网](https://waline.js.org/guide/get-started.html) 根据文档配置好 `数据库` 和 `服务端`

## 使用

```html
<script>
  window.$docsify = {
    waline: {
        serverURL: "https://your-domain.vercel.app",
        docPath: "default: hash", // 对应 waline 的 path 参数
    }
  }
</script>

<script src="//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>

<script src="//cdn.jsdelivr.net/gh/cxcn/docsify-waline/docsify-waline.min.js"></script>
<!-- 或者 -->
<script src="//cdn.jsdelivr.net/npm/docsify-waline/docsify-waline.min.js"></script>

```

## 其他

暂不支持浏览量统计和评论数统计。