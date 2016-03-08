(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrders', [])
    .directive('myOrders', myOrders);
  
  function myOrders() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: myOrdersController,
      controllerAs: 'myOrders',
      templateUrl: 'app/modules/myOrders/myOrders.html'
    };
  }
  
  myOrdersController.$inject = ['$scope'];
  function myOrdersController($scope) {
    var vm = this;
    
  }
})();