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
        item: '='
      },
      bindToController: {},
      controller: cartItemController,
      controllerAs: 'cartItem',
      templateUrl: 'app/modules/cartItem/cartItem.html'
    }
  };
  
  cartItemController.$inject = ['$scope', '$q']
  function cartItemController($scope, $q) {
    var vm = this;
    vm.item = $scope.item;
    console.log("da item", vm.item);
  };
  
})();