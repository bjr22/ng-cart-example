(function () {
  'use strict';
  
  angular
    .module('ngCartExample')
    .config(configRoutes);
  
  function configRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          '@': {
            templateUrl: 'app/templates/layout.html',
            controller: 'AppCtrl'
          }
        }
      })
      /* HOME */
      .state('app.home', {
        url: '/',
        views : {
          'content@app': {
            template: 
              '<ion-view ng-cloak can-swipe-back="false" view-title="Home">' +
                '<ion-content has-bouncing="false"  >' +
                  '<on-sale-item-list></on-sale-item-list>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
      /* CART RESUME */
      .state('app.cartResume', {
        url: '/cart-resume',
        views: {
          'content@app': {
            template:
              '<ion-view ng-cloak can-swipe-back="false" view-title="Cart Summary">' +
                '<ion-content has-bouncing="false"  >' +
                  '<cart-summary></cart-summary>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
      /* ITEM DETAILS */
      .state('app.itemDetail', {
        url: '/item/:itemId',
        resolve: {
          items: ['MockedData', function (MockedData) {
            return MockedData.getItems();
          }],
          opinions: ['MockedData',function (MockedData) {
            return MockedData.getOpinions();
          }]
        },
        views: {
          'content@app': {
            controller: ['$scope', '$stateParams', 'items', 'opinions', function ($scope, $stateParams, items, opinions) {
              var _opinions = [];
              items.forEach(function (_item) {
                if (_item.id === $stateParams.itemId) {
                  $scope.item = _item;
                }
              });
              opinions.forEach(function (_opinion) {
                if (_opinion.itemId === $scope.item.id) {
                  _opinions.push(_opinion);
                }
              });
              $scope.opinions = _opinions;
            }], 
            template: 
              '<ion-view ng-cloak can-swipe-back="false" view-title="Item details">' +
                '<ion-content has-bouncing="false"  >' +
                  '<item-details item="item" opinions="opinions"></item-details>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    ;
  }
})();