(function () {
  'use strict';
  
  angular
    .module('ngCartExample.model.users')
    .config(moduleConfig);
  
  moduleConfig.$incject = ['fluxProvider'];
  function moduleConfig(fluxProvider) {
    fluxProvider.setMaxListeners(20);
    fluxProvider.useCloning(false);
  }
})()