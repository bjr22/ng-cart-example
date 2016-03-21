(function () {
  'use strict';
  
  angular
    .module('ngCartExample.itemDetails', [])
    .directive('itemDetails', itemDetails);
  
  function itemDetails() {
    return {
      restrict: 'E',
      scope: {
        item: '=',
        opinions: '='
      },
      bindToController: {},
      controller: itemDetailsController,
      controllerAs: 'itemDetails',
      templateUrl: 'app/modules/itemDetails/itemDetails.html'
    };
  }
  
  itemDetailsController.$inject = ['$scope'];
  function itemDetailsController($scope) {
    var vm = this;
    vm.item = $scope.item;
    vm.opinions = $scope.opinions;
  }
  
})();