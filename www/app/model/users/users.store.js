(function () {
  'use strict';
  
  angular
    .module('ngCartExample.stores')
    .constant('UsersConstant', {
      USER_UPDATE: 'user.update'
    })
    .factory('UsersAction', UsersAction)
    .store('UsersStore', UsersStore);
  
  UsersStore.$inject = ['$q', 'UsersConstant', 'MockedData'];
  function UsersStore($q, UsersConstant, MockedData) {
    var _user = null;
    
    var returnStore = {
      handlers: [],
      exports: {
        getUserById: function (userId) {
          var defer = $q.defer();
          
          if (!(_user && _user.id === userId)) {
            MockedData.getUsers().then(function (users) {
              users.forEach(function(user) {
                if (user.id = userId) {
                  _user = user;
                }
              });
            });
          }
          
          defer.resovle(_user);
          return defer.promise;
        }
      }
    };
    
    returnStore.handlers[UsersConstant.USER_UPDATE] = function(user) {
      _user = null;
      this.emit(UsersConstant.USER_UPDATE, user);
    }
    
    return returnStore;
  };
  
  UsersAction.$inject = ['flux', 'UsersConstant', 'MockedData'];
  function UsersAction (flux, UsersConstant, MockedData) {
    return {
      updateUser: function () {
        return MockedData.getUsers().then(function (users) {
          flux.dispath(UsersConstant.USER_UPDATE, users[1]);
        });
      }
    }
  }
})();