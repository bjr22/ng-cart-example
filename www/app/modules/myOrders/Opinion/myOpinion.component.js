(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOpinion',  ['ionic'])
    .directive('myOpinion', myOpinion);
  
  function myOpinion() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: myOpinionController,
      controllerAs: 'myOpinion',
      templateUrl: 'app/modules/myOrders/Opinion/myOpinion.html'
    };
  }
  
  myOpinionController.$inject = ['$scope','MockedData','$state'];
  function myOpinionController($scope,MockedData,$state) {

  }
})();