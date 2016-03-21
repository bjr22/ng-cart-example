(function() {
  'use strict';
  
  angular
    .module('ngCartExample.onSaleItemList', [])
    .directive('onSaleItemList', onSaleItemListDirective);
  
  function onSaleItemListDirective() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: onSaleItemListController,
      controllerAs: 'onSaleItemList',
      templateUrl: 'app/modules/onSaleItemList/onSaleItemList.html'
    }
  };
  
  onSaleItemListController.$inject = ['$scope', 'ItemsConstants', 'ItemsAction', 'ItemsStore'];
  function onSaleItemListController($scope, ItemsConstants, ItemsAction, ItemsStore) {
    var vm = this;
    vm.items = [];
	ItemsStore.getItems().then( function (_items) {
      vm.items = _items;
    });
  }
})();