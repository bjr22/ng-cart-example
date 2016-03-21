(function () {
  'use strict';
  
  angular
    .module('ngCartExample.stores', ['flux'])
    .config(moduleConfig);
  
  moduleConfig.$inject = ['fluxProvider'];
  function moduleConfig(fluxProvider) {
    fluxProvider.setMaxListeners(20);
    fluxProvider.useCloning(false);
  }
})();