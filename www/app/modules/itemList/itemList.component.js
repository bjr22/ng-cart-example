(function() {
  'use strict';
  
  angular
    .module('ngCartExample.itemList', [])
    .directive('itemList', itemListDirective);
  
  function itemListDirective() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: itemListController,
      controllerAs: 'itemList',
      templateUrl: 'app/modules/itemList/itemList.html'
    }
  };
  
  itemListController.$inject = ['$scope', 'ItemsConstants', 'ItemsAction', 'ItemsStore'];
  function itemListController($scope, ItemsConstants, ItemsAction, ItemsStore) {
    var vm = this;
    vm.items = [];
	ItemsStore.getItems().then( function (_items) {
      vm.items = _items;
    });
  }
})();