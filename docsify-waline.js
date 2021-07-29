function install(hook, vm) {
  var options = vm.config.waline || {};
  if (!options.serverURL) {
    console.warn('sorry, waline.serverURL must be required.');
    return;
  }
  const dom = Docsify.dom;
  var w = false;

  hook.mounted((_) => {
    const div = dom.create('div');
    div.id = 'waline';
    const main = dom.getNode('#main');
    div.style = `width: ${main.clientWidth}px; margin: 0 auto 20px;`;
    dom.appendTo(dom.find('.content'), div);
    options.el = document.getElementById('waline');
  });

  hook.doneEach((_) => {
    if (w) {
      w.destroy();
    }
    options.path = location.hash;
    w = Waline(options);
    // console.log(options);
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins);
