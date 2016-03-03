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
      templateUrl: 'app/modules/opinionList/opinionList.html'
    };
  }
  
  opinionListController.$inject = ['$scope'];
  function opinionListController($scope) {
    var vm = this;
    vm.opinions = $scope.opinions || [];
    vm.maxRate = 5;
  }
})();