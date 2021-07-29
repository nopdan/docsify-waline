function install(hook, vm) {
  const dom = Docsify.dom;

  hook.ready((_) => {
    if (!window.Waline) {
      console.warn('please include script before init $docsify');
    }
  });

  hook.mounted((_) => {
    const div = dom.create('div');
    div.id = 'waline';
    const main = dom.getNode('#main');
    // div.style = "width: " + i.clientWidth + "px !important; margin: 0 auto 20px;", a.appendTo(a.find(".content"), n);
    div.style = 'max-width: 80% !important; margin: 0 auto 20px;';
    dom.appendTo(dom.find('.content'), div); // responsive design
  });

  hook.doneEach((_) => {
    var options = vm.config.waline || {};
    if (!options.serverURL) {
      console.warn('sorry, serverURL must be required.');
      return;
    }
    options.el = document.getElementById('waline');
    Waline(options);
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins);
