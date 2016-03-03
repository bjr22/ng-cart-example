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
  
  onSaleItemListController.$inject = ['$scope', 'MockedData'];
  function onSaleItemListController($scope, MockedData) {
    var vm = this;
    vm.items = [];
    MockedData.getItems().then(function (response) {
      vm.items = response;
    });
  }
})();