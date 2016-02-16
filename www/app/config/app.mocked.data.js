(function () {
  'use strict';
  angular
    .module('ngCartExample')
    .factory('MockedData', MockedData);
  
  MockedData.$inject = ['$http', '$q']
  function MockedData ($http, $q) {
    var getSomeData = function (source) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: source
      }).then(function successCallback(response) {
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        deferred.reject({err: response, msg: 'something went wrong'});
      });
      return deferred.promise;
    };
    var path = 'json/';
    var extension = '.json';
    return {
      getCategories: function () {
        return getSomeData(path + 'category' + extension);
      },
      getItems: function () {
        return getSomeData(path + 'item' + extension);
      },
      getOpinions: function () {
        return getSomeData(path + 'opinion' + extension);
      },
      getOrders: function () {
        return getSomeData(path + 'order' + extension);
      },
      getOrderItems: function () {
        return getSomeData(path + 'orderItem' + extension);
      },
      getSections: function () {
        return getSomeData(path + 'section' + extension);
      },
      getShipmentAddresses: function () {
        return getSomeData(path + 'shipmentAddress' + extension);
      },
      getUsers: function () {
        return getSomeData(path + 'user' + extension);
      }
    }
  }
})();