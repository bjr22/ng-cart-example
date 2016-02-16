(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart, MockedData) {
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);
    
      var vm = this;
      vm.items = []
      MockedData.getItems().then(function (response) {
        vm.items = response;
      });
  });
})();