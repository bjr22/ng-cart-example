(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .controller('AppCtrl', function($scope, $http, ngCart, MockedData, $state, $ionicHistory) {
      ngCart.setTaxRate(7.5);
      ngCart.setShipping(2.99);
      $scope.manageGoHome = function() {
        $ionicHistory.nextViewOptions({   //To clear the back option when going home
          disableBack: true
        });
        $state.go('app.home');
      };
      $scope.showSubheader = function() {
        return !($state.is('app.login') || $state.is('app.myOrders') || $state.is('app.myProfile'));
      };
      $scope.showCartButton = function () {
        return (!($state.is('app.cartResume') || $state.is('app.login')) && ngCart.getTotalItems() > 0);
      };
      $scope.showHomeButton = function () {
        return !$state.is('app.home');
      };
  });
})();