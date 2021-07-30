function install(hook, vm) {
  var options = vm.config.waline || {};
  if (!options.serverURL) {
    console.warn('sorry, waline.serverURL must be required.');
    return;
  }
  options.docPath = options.docPath || 'hash';

  var w = false;

  hook.mounted((_) => {
    const dom = Docsify.dom;
    const div = dom.create('div');
    div.id = 'waline';
    const main = dom.getNode('#main');
    div.style = `width: ${main.clientWidth}px; margin: 0 auto 20px; padding: 0 1rem`;
    dom.appendTo(dom.find('.content'), div);
    options.el = document.getElementById('waline');
  });

  hook.doneEach((_) => {
    if (w) {
      w.destroy();
    }
    options.path = window.location[options.docPath];
    // console.log(options.path);
    w = Waline(options);
    // console.log(options);
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins);
