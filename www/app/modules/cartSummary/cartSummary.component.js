(function () {
  'use strict';
  
  angular
    .module('ngCartExample.cartSummary', [])
    .directive('cartSummary', cartSummaryDirective);
  
  function cartSummaryDirective() {
    return {
      restrict: 'E',
      scope: {},
      controller: cartSummaryController,
      controllerAs: 'cartSummary',
      templateUrl: 'app/modules/cartSummary/cartSummary.html'
    }
  }
  
  cartSummaryController.$inject = ['$scope', 'ngCart', '$state'];
  function cartSummaryController($scope, ngCart, $state) {
    var vm = this;
    vm.ngCart = ngCart;
  }
})();