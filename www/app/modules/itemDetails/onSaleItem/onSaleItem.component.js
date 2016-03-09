(function () {
  'use strict';
  
  angular
    .module('ngCartExample.onSaleItem', [])
    .directive('onSaleItem', onSaleItemDirective);
  
  function onSaleItemDirective() {
    return {
      restrict: 'E',
      scope: {
        item: '=',
        detailed: '='
      },
      bindToController: {},
      controller: onSaleItemController,
      controllerAs: 'onSaleItem',
      templateUrl: 'app/modules/itemDetails/onSaleItem/onSaleItem.html'
    };
  };
  
  onSaleItemController.$inject = ['$scope', '$state'];
  function onSaleItemController($scope, $state) {
    var vm = this;
    vm.item = $scope.item;
    vm.detailed = $scope.detailed;
    
    $scope.readOnly = true; //readOnly rating directive
    $scope.rating = {
      rate: vm.item.averageRate,
      max: 5      
    };
    
    vm.manageClickOnImage = function () {
      if (vm.detailed) {
        // functionality when the item is shown as detailed one
      } else {
        $state.go('app.itemDetail', {itemId: vm.item.id});
      }
    }
  };
  
})();