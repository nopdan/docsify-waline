$docsify.plugins = [].concat(function (hook, vm) {
  let options = vm.config.waline || {};
  options.el = "#waline";
  if (!options.serverURL) {
    console.warn("sorry, waline.serverURL must be required.");
    return;
  }

  let language = vm.config.count.language || "english";
  let suffix;
  switch (language) {
    case "english":
      suffix = "></span>&nbsp;times";
      break;
    case "chinese":
      suffix = "></span>&nbsp;次阅读";
      break;
    default:
      console.warn("unsupported language", language);
      suffix = "></span>&nbsp;times";
  }

  let w = false;
  let flag = false;

  // 每次路由切换时数据全部加载完成后调用，没有参数。
  hook.doneEach((_) => {
    if (!flag) { // 没有挂载上 div
      return;
    }
    if (w) {
      w.destroy(); // waline 存在时重新加载
    }
    path = window.location.pathname + window.location.hash;
    options.path = path.replace(/\?.*$/, "");
    // console.log(options.path);
    // 浏览量统计
    let pageview = document.querySelector(`#main div>span`);
    if (pageview) {
      pageview.innerHTML += `&nbsp;|&nbsp;<span class="waline-pageview-count" data-path="${options.path}"${suffix}`;
    }
    w = Waline.init(options);
    Waline.pageviewCount({ serverURL: options.serverURL, path: options.path });
  });

  // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
  hook.mounted((_) => {
    let waline = document.createElement("div");
    waline.id = "waline";
    waline.style = "max-width: var(--content-max-width); margin: 0 auto 20px;";
    let content = document.querySelector("section.content");
    content.appendChild(waline);
    flag = true;
  });
}, $docsify.plugins);
