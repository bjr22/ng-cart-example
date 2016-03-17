(function () {
  'use strict';
  
  angular
    .module('ngCartExample.model.users')
    .store('UsersStore', UsersStore);
  
  UsersStore.$inject = ['flux', 'UsersAction', 'UserConstant'];
  function UserStore (flux, UsersAction, UserConstant) {
    var state = flux.immutable({
      users: []
    });
    
    var returnStore = {
      user: {},
      handlers: [],
      exports: {}
    }
    
    returnStore.handlers[UserConstant.USERS_UPDATE_ACTION] = '_internalUpdateUserAction';
    
    returnStore._internalUpdateUserAction = function (userId) {
      
    }
  }
})();