(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrders',  ['ionic'])
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
  
  myOrdersController.$inject = ['$scope','MockedData'];
  function myOrdersController($scope,MockedData) {
      var vm = this;
      vm.order = {}
      vm.items = []
      vm.total = 0;
      
      vm.orders = []
      MockedData.getOrders().then(function (response) {
          vm.orders = response;
      });
      
      angular.forEach(vm.orders, function(_order) {
        if(_order.userId == 'user1') {
            vm.order = _order;
        }
      });
      
      vm.orderItems = []
      MockedData.getOrderItems().then(function (response) {
          vm.orderItems = response;
          
          angular.forEach(vm.orderItems, function(_orderitems) {
              if(_orderitems.orderId == 'order1') {
                  vm.items.push(_orderitems.itemId);           
              }
          });
      });
      
    }
})();