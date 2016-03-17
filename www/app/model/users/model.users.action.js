(function () {
  'use strict';
  
  angular
    .module('ngCartExample.model.users')
    .factory('UsersAction', UsersAction);
  
  UsersActions.$inject = ['flux', 'UsersConstants', 'MockedData', '$q']
  function UsersAction(flux, UserConstants, MockedData, $q) {
    var promise = undefined;
    
    return {
      getUserById: function (userId) {
        if (!promise) {
          promise = MockedData.getUsers().then(function (users) {
            var user = {};
            
          })
        }
      }
    };
  }
})();