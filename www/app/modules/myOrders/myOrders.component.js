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
  
  myOrdersController.$inject = ['$scope','MockedData','$state'];
  function myOrdersController($scope,MockedData,$state) {
      var vm = this;
      
      vm.clickOnItem = function (id) {
          $state.go('app.itemDetail', {itemId: id});
      }
      
      var orders = []
      MockedData.getOrders().then(function (response) {
          vm._orders = response;
          
          angular.forEach(vm._orders, function(order) {
            if(order.id == 'order1' || order.id == 'order2') {
                orders.push(order);
            }
          });
          vm.orders = orders;
      });
      
      vm.orderItems = []
      MockedData.getOrderItems().then(function (response) {
          vm.orderItems = response;
          
          for(var i = 0; i < vm.orders.length; ++i) {
              orders[i].items = []
              angular.forEach(vm.orderItems, function(_orderitems) {     
                  if(_orderitems.orderId == vm.orders[i].id) {
                      vm.orders[i].items.push(_orderitems.itemId);           
                  }
              });
          }
          //console.log(vm.order);
      }); 
      
      vm.itemsdetail = []
      MockedData.getItems().then(function(response) {
          vm.itemsdetail = response;
          
          // Recorremos los orders.
          for(var i = 0; i < vm.orders.length; ++i) {
              //Recorremos los items de los orders.
              for(var j = 0; j < vm.orders[i].items.length; ++j) {
                  angular.forEach(vm.itemsdetail, function(_allitems) {
                      // Añadimos a ese item los detalles.
                      if(vm.orders[i].items[j] == _allitems.id) {
                          vm.orders[i].items[j] = _allitems;
                      }
                  });   
              }
          }
      }); 
      
  }
})();