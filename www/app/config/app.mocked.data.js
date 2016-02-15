(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .factory('MockedData', MockedData);
  
  MockedData.$inject = ['$http', '$q']
  function MockedData ($http, $q) {
    var getSomeData = function (source) {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: source
      }).then(function successCallback(response) {
        
      }, function errorCallback(response) {
        
      });
    }
    return {
      getCategories: function () {
        
      }
    }
  }
})();