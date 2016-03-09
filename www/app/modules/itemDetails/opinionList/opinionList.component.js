(function () {
  'use strict';
  
  angular
    .module('ngCartExample.opinionList', [])
    .directive('opinionList', opinionListDirective);
  
  function opinionListDirective() {
    return {
      restrict: 'E',
      scope: {
        opinions: '='
      },
      bindToController: {},
      controller: opinionListController,
      controllerAs: 'opinionList',
      templateUrl: 'app/modules/itemDetails/opinionList/opinionList.html'
    };
  }
  
  opinionListController.$inject = ['$scope'];
  function opinionListController($scope) {
    var vm = this;
    vm.opinions = $scope.opinions || [];
    vm.maxRate = 5;
    var _averageRate = 0;
    vm.opinions.forEach(function (_opinion) {
      _averageRate += _opinion.rate;
    });
    vm.averageRate = _averageRate / vm.opinions.length;
    $scope.readOnly = true; //To make rating directive readOnly
  }
})();