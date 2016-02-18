(function() {
  'use strict';
  
  angular
    .module('ngCartExample.cartItemList', [])
    .directive('cartItemList', cartItemListDirective);
  
  function cartItemListDirective() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: cartItemListController,
      controllerAs: 'cartItemList',
      templateUrl: 'app/modules/cartItemList/cartItemList.html'
    }
  };
  
  cartItemListController.$inject = ['$scope', 'MockedData'];
  function cartItemListController($scope, MockedData) {
    var vm = this;
    vm.items = [];
    MockedData.getItems().then(function (response) {
      vm.items = response;
    });
  }
})();