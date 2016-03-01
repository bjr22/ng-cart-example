(function () {
  'use strict';
  
  angular
    .module('ngCartExample.cartItem', [])
    .directive('cartItem', cartItemDirective);
  
  function cartItemDirective() {
    return {
      restrict: 'E',
      //replace: true,
      scope: {
        item: '=',
        detailed: '='
      },
      bindToController: {},
      controller: cartItemController,
      controllerAs: 'cartItem',
      templateUrl: 'app/modules/cartItem/cartItem.html'
    }
  };
  
  cartItemController.$inject = ['$scope', '$q'];
  function cartItemController($scope, $q) {
    var vm = this;
    vm.item = $scope.item;
    vm.detailed = $scope.detailed;
    $scope.rating = {
      rate: vm.item.averageRate,
      max: 5      
    };
  };
  
})();