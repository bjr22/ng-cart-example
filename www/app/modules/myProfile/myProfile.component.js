(function() {
  'use strict';
  
  angular
    .module('ngCartExample.myProfile', [])
    .directive('myProfile', myProfile);
  
  function myProfile() {
    return {
      restrict: 'E',
      scope: {
          address: '='
      },
      bindToController: {},
      controller: myProfileController,
      controllerAs: 'myProfile',
      templateUrl: 'app/modules/myProfile/myProfile.html'
    }
  };
  
  myProfileController.$inject = ['$scope', 'MockedData'];
        function myProfileController($scope, MockedData) {
          var vm = this;
          vm.users = [];
          MockedData.getUsers().then(function (response) {
              vm.users = response;
          });

          vm.address = [];
          MockedData.getShipmentAddresses().then(function (response) {
              vm.addresses = response;
          });
        }
//        function updateProfile($scope, MockedData) {
//            var vm = this;
//            vm.info = [];
//        }
})();