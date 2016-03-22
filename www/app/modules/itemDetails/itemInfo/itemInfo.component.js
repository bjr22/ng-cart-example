(function () {
  'use strict';
  
  angular
    .module('ngCartExample.itemInfo', [])
    .directive('itemInfo', itemInfoDirective);
  
  function itemInfoDirective() {
    return {
      restrict: 'E',
      scope: {
        item: '=',
        detailed: '='
      },
      bindToController: {},
      controller: itemInfoController,
      controllerAs: 'itemInfo',
      templateUrl: 'app/modules/itemDetails/itemInfo/itemInfo.html'
    };
  };
  
  itemInfoController.$inject = ['$scope', '$state'];
  function itemInfoController($scope, $state) {
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