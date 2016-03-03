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
          }]
        },
        views: {
          'content@app': {
            controller: ['items', '$scope', '$stateParams', function (items, $scope, $stateParams) {
              items.forEach(function (_item) {
                if (_item.id === $stateParams.itemId) {
                  $scope.item = _item;
                }
              });
            }], 
            template: 
              '<ion-view ng-cloak can-swipe-back="false" view-title="Item details">' +
                '<ion-content has-bouncing="false"  >' +
                  '<on-sale-item item="item" detailed="true"></on-sale-item>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    ;
  }
})();