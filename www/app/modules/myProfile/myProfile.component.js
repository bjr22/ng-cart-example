(function() {
  'use strict';
  
  angular
    .module('ngCartExample.myProfile', ['ionic'])
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
  
myProfileController.$inject = ['$scope', 'MockedData','$ionicPopup'];
    function myProfileController($scope, MockedData,$ionicPopup) {
        var vm = this;
        vm.user = {
            'id': '',
            'name' : '',
            'lastName' : '',
            'birthDate' : '',
            'address' : '',
        }
        
        vm.users = [];
        MockedData.   getUsers().then(function (response) {
            vm.users = response;
            
            angular.forEach(vm.users, function(value, key) {
                if(value.id == 'user1') {
                    vm.user.id = value.id;
                    vm.user.name = value.name;
                    vm.user.lastName = value.lastName;
                    vm.user.birthDate = value.birthDate;
                }
            });
        });
                
        vm.addresses = [];
        MockedData.getShipmentAddresses().then(function (response) {
            vm.addresses = response;
            
            angular.forEach(vm.addresses, function(value, key) {
                if(value.id == 'address1') {
                    vm.user.address = value.address;           
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