(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrders', [])
    .directive('myOrders', myOrders);
  
  function myOrders() {
    return {
      restrict: 'E',
      scope: {
        orders: '='
      },
      bindToController: {},
      controller: myOrdersController,
      controllerAs: 'myOrders',
      templateUrl: 'app/modules/myOrders/myOrders.html'
    };
  }
  
  myOrdersController.$inject = ['$scope'];
  function myOrdersController($scope) {
    var vm = this;
    vm.orders = $scope.orders;
  }
})();