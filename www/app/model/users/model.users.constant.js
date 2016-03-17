(function () {
  'use strict';
  
  angular
    .module('ngCartExample.model.users')
    .constant('UserConstant', {
      'USERS_UPDATE_ACTION': 'users_update',
      'USERS_UPDATE_EVENT': 'users.update'
  });
})();