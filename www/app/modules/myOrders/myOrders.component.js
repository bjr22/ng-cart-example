(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrders',  ['ionic'])
    .directive('myOrders', myOrders);
  
  function myOrders() {
    return {
      restrict: 'E',
      scope: {
          order: '=',
          orderItems: '=',
          itemsdetail: '='
      },
      bindToController: {},
      controller: myOrdersController,
      controllerAs: 'myOrders',
      templateUrl: 'app/modules/myOrders/myOrders.html'
    };
  }
  
  myOrdersController.$inject = ['$scope','MockedData','$state'];
  function myOrdersController($scope,MockedData,$state) {
      var vm = this;
      
      var order = []
      MockedData.getOrders().then(function (response) {
          vm.orders = response;
          
          angular.forEach(vm.orders, function(_order) {
            if(_order.id == 'order1' || _order.id == 'order2') {
                order.push(_order);
            }
          });
          vm.order = order;
      });
      
      vm.orderItems = []
      MockedData.getOrderItems().then(function (response) {
          vm.orderItems = response;
          
          for(var i = 0; i < vm.order.length; ++i) {
              order[i].items = []
              angular.forEach(vm.orderItems, function(_orderitems) {     
                  if(_orderitems.orderId == vm.order[i].id) {
                      vm.order[i].items.push(_orderitems.itemId);           
                  }
              });
          }
          //console.log(vm.order);
      }); 
      
      vm.itemsdetail = []
      MockedData.getItems().then(function(response) {
          vm.itemsdetail = response;
          
          // Recorremos los orders.
          for(var i = 0; i < vm.order.length; ++i) {
              //Recorremos los items de los orders.
              for(var j = 0; j < vm.order[i].items.length; ++j) {
                  angular.forEach(vm.itemsdetail, function(_allitems) {
                      // Añadimos a ese item los detalles.
                      if(vm.order[i].items[j] == _allitems.id) {
                          vm.order[i].items[j] = _allitems;
                      }
                  });   
              }
          }
          //console.log(vm.order);
      }); 
      
      $scope.order = vm.order || [];
      $scope.orderItems = vm.orderItems || [];
      $scope.itemsdetail = vm.itemsdetail || [];

  }
})();