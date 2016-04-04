(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrdersDetail',  ['ionic'])
    .directive('myOrdersDetail', myOrdersDetailDirective);
  
  function myOrdersDetailDirective() {
    return {
      restrict: 'E',
      scope: {
          items: '=',
          total: '='
      },
      bindToController: {},
      controller: myOrdersDetailController,
      controllerAs: 'myOrdersDetail',
      templateUrl: 'app/modules/myOrders/OrderDetail/myOrdersDetail.html'
    };
  }
  
  myOrdersDetailController.$inject = ['$scope','$ionicPopup', 'UsersConstants', 'UsersStore', 'UsersAction', 'MockedData', 'AddressesConstants', 'AddressesStore', 'AddressesAction','$state'];
  function myOrdersDetailController($scope,$ionicPopup, UsersConstants, UsersStore, UsersAction, MockedData, AddressesConstants, AddressesStore, AddressesAction, $state) {
      var vm = this;
      
      vm.clickOnItem = function (id) {
          $state.go('app.itemDetail', {itemId: id});
      }
      
      
      vm.user = null;

      UsersStore.getUserById('user1').then(function (_user) {

          vm.user = _user;
                          
          AddressesStore.getAddressById(vm.user.addressId).then(function (_address) {
              
            vm.user.address = _address;
          });
      });
      
      vm.items = $scope.items;
      vm.total = $scope.total;      
  }
})();
