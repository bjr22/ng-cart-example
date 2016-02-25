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
  
  cartSummaryController.$inject = ['$scope', 'ngCart'];
  function cartSummaryController($scope, ngCart) {
    var vm = this;
    vm.ngCart = ngCart;
    console.log("Funciona!", vm.ngCart.getTotalItems());
  }
})();