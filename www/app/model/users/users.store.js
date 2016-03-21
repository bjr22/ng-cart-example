(function () {
  'use strict';
  
  angular
    .module('ngCartExample.stores')
    .constant('UsersConstants', {
      USER_UPDATE: 'user.update'
    })
    .factory('UsersAction', UsersAction)
    .store('UsersStore', UsersStore);
  
  UsersStore.$inject = ['$q', 'UsersConstants', 'MockedData'];
  function UsersStore($q, UsersConstants, MockedData) {
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
                  defer.resolve(_user);
                }
              });
            });
          } else {
            defer.resolve(_user);
          }
          
          return defer.promise;
        }
      }
    };
    
    returnStore.handlers[UsersConstants.USER_UPDATE] = function(user) {
      _user = null;
      this.emit(UsersConstants.USER_UPDATE, user);
    }
    
    return returnStore;
  };
  
  UsersAction.$inject = ['flux', 'UsersConstants', 'MockedData'];
  function UsersAction (flux, UsersConstants, MockedData) {
    return {
      updateUser: function () {
        return MockedData.getUsers().then(function (users) {
          flux.dispath(UsersConstants.USER_UPDATE, users[1]); //fake update
        });
      }
    }
  }
})();