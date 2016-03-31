(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOpinion',  ['ionic'])
    .directive('myOpinion', myOpinion);
  
  function myOpinion() {
    return {
      restrict: 'E',
      scope: {
          item: '='
      },
      bindToController: {},
      controller: myOpinionController,
      controllerAs: 'myOpinion',
      templateUrl: 'app/modules/myOrders/Opinion/myOpinion.html'
    };
  }
  
  myOpinionController.$inject = ['$scope','MockedData','$state','$ionicPopup'];
  function myOpinionController($scope,MockedData,$state,$ionicPopup) {
      var vm = this;
      vm.item = $scope.item;
      vm.opinion = null;
      
      vm.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: 'Opinión enviada correctamente',
            template:   
              'Opinión: ' + vm.opinion
          });
        };
      }
})();