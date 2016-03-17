(function () {
  'use strict';
  
  angular
    .module('ngCartExample.model.users')
    .factory('UsersAction', UsersAction);
  
  UsersActions.$inject = ['flux', 'UsersConstant', 'MockedData', '$q']
  function UsersAction(flux, UserConstants, MockedData, $q) {
    var promise = undefined;
    
    return {
      getUserById: function () {
        if (!promise) {
          promise = MockedData.getUsers().then(function (users) {
            var user = {};
            users.forEach(function (_user) {
              if (userId === _user.id) {
                user = _user;
              }
            });
            flux.dispatch(UserConstant.USERS_UPDATE_ACTION, user);
          })
        }
      }
    };
  }
})();