(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart, MockedData, $state, $ionicHistory) {
      var vm = $scope;
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);
      vm.$state = $state;
      vm.ngCart = ngCart;
      vm.manageGoHome = function () {
        $ionicHistory.nextViewOptions({   //To clear the back option when going home
          disableBack: true
        });
        $state.go('app.home');
      }
  });
})();