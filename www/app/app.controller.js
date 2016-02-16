(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart, MockedData) {
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);
    
      var vm = $scope;
      MockedData.getUsers().then(function (response) {
        console.log("users", response);
      });
  });
})();