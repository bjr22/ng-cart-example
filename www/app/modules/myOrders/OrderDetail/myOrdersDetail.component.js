(function () {
  'use strict';
  
  angular
    .module('ngCartExample.myOrdersDetail',  ['ionic'])
    .directive('myOrdersDetail', myOrdersDetailDirective);
  
  function myOrdersDetailDirective() {
    return {
      restrict: 'E',
      scope: {},
      bindToController: {},
      controller: myOrdersDetailController,
      controllerAs: 'myOrdersDetail',
      templateUrl: 'app/modules/myOrders/OrderDetail/myOrdersDetail.html'
    };
  }
  
  myOrdersDetailController.$inject = ['$scope','$ionicPopup', 'UsersConstants', 'UsersStore', 'UsersAction', 'MockedData', 'AddressesConstants', 'AddressesStore', 'AddressesAction'];
  function myOrdersDetailController($scope,$ionicPopup, UsersConstants, UsersStore, UsersAction, MockedData, AddressesConstants, AddressesStore, AddressesAction) {
      var vm = this;
      vm.user = null;

      UsersStore.getUserById('user1').then(function (_user) {

          vm.user = _user;
                          
          AddressesStore.getAddressById(vm.user.addressId).then(function (_address) {
              
            vm.user.address = _address;
          });

           
      });
    
      vm.order = $scope.order;
      vm.orderItems = $scope.orderItems;
      vm.itemsdetail = $scope.itemsdetail;

  }
})();
