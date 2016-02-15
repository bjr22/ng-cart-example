(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart) {
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);    
  });
})();