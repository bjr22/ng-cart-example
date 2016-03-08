(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart, MockedData, $state) {
      var vm = $scope;
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);
      vm.$state = $state;
      vm.ngCart = ngCart;
  });
})();