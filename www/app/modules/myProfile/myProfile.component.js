(function() {
  'use strict';
  
  angular
    .module('ngCartExample.myProfile', ['ionic'])
    .directive('myProfile', myProfile);
  
  function myProfile() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: myProfileController,
      controllerAs: 'myProfile',
      templateUrl: 'app/modules/myProfile/myProfile.html'
    }
  };
  
myProfileController.$inject = ['$scope', 'MockedData','$ionicPopup'];
    function myProfileController($scope, MockedData,$ionicPopup) {
        var vm = this;
        vm.user = {}
        
        vm.users = [];
        MockedData.   getUsers().then(function (response) {
            vm.users = response;
            
            angular.forEach(vm.users, function(_user) {
                if(_user.id == 'user1') {
                    vm.user = _user;
                }
            });
        });
                
        vm.addresses = [];
        MockedData.getShipmentAddresses().then(function (response) {
            vm.addresses = response;
            
            angular.forEach(vm.addresses, function(_address) {
                if(_address.id == 'address1') {
                    vm.user.address = _address.address;           
                }
            });
        });
         
       $scope.showAlert = function() {
           var alertPopup = $ionicPopup.alert({
            title: 'Datos modificados correctamente',
            template:   
                'Nombre usuario: '+vm.user.name+'<br>'+'Apellido: '+vm.user.lastName+'<br>'+
                'Fecha de nacimiento: '+vm.user.birthDate+'<br>'+'Dirección: '+vm.user.address+'<br>'
            });
       };
    }
})();