$docsify.plugins = [].concat(function (hook, vm) {
  var options = vm.config.waline || {};
  options.el = "#waline";
  if (!options.serverURL) {
    console.warn("sorry, waline.serverURL must be required.");
    return;
  }

  var w = false;
  // 每次路由切换时数据全部加载完成后调用，没有参数。
  hook.doneEach((_) => {
    if (w) {
      w.destroy(); // waline 存在时重新加载
    }
    path = window.location.pathname + window.location.hash;
    options.path = path.replace(/\?.*$/, "");
    // console.log(options.path);
    // 浏览量统计
    let visitor = document.querySelector("#main div>span");
    visitor.innerHTML +=
      "&nbsp;|&nbsp;<span class=waline-visitor-count id=" +
      options.path +
      "></span>&nbsp;次阅读";
    w = Waline(options);
  });

  // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
  hook.mounted((_) => {
    let waline = document.createElement("div");
    waline.id = "waline";
    waline.style = "max-width: var(--content-max-width); margin: 0 auto 20px;";
    let content = document.querySelector("section.content");
    content.appendChild(waline);
  });
}, $docsify.plugins);
