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
  
  myProfileController.$inject = ['$scope', '$ionicPopup', 'UsersConstants', 'UsersStore', 'UsersAction', 'MockedData', 'AddressesConstants', 'AddressesStore', 'AddressesAction'];
  function myProfileController($scope, $ionicPopup, UsersConstants, UsersStore, UsersAction, MockedData, AddressesConstants, AddressesStore, AddressesAction) {
    var vm = this;
    vm.user = null;

    UsersStore.getUserById('user1').then(function (_user) {
      console.log(_user);
      vm.user = _user;
      AddressesStore.getAddressById(vm.user.addressId).then(function (_address) {
        vm.user.address = _address;
		console.log(vm.user.address);
      });
    });

    vm.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Datos modificados correctamente',
        template:   
          'Nombre usuario: ' + vm.user.name +
		  '<br>'+'Apellido: ' + vm.user.lastName +
		  '<br>'+'Fecha de nacimiento: ' + vm.user.birthDate +
		  '<br>'+'Dirección: ' + vm.user.address.address +
		  '<br>'+'Codigo postal: ' + vm.user.address.postalCode + 
		  '<br>'+'Ciudad: ' + vm.user.address.city +
		  '<br>'+'Pais: ' + vm.user.address.country
      });
    };
  }
})();