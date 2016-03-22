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
          },
          'sidebar@app': {
            controller: '',
            templateUrl: 'app/templates/sidebar.html'
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
    
      .state('app.cartResumeSubHeader',{
        abstract:true,
        viws: {
          'content@app': {
            controller: ['ngCart', function (ngCart) {}],
            template:
              '<ion-view ng-cloak can-swipe-back="false" class="has-subheader" view-title="Cart Summary">' +
                '<div class="bar bar-subheader">' +
                  '<h4 class"">Total: {{ngCart.totalCost()}}</h4>' +
                '</div>' +
                '<ion-nav-view name="content">' +
                '</ion-nav-view>' +
              '</ion-view>'
          }
        }
      })
      
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
          },
          'subheader@app': {
            template:
              '<ion-view>' +
                '<ion-content class="has-subheader">' +
                  '<div class="bar bar-subheader">' +
                    '<h4 class"">Total: {{ngCart.totalCost()}}</h4>' +
                  '</div>' +
                '</ion-content>' +
              '</ion-view>',
            controller: ['ngCart', function (ngCart) {}]
          }
        }
      })
      /* LOGIN */
      .state('app.login', {
        url: '/login',
        views: {
          'content@app': {
            template:
              '<ion-view ng-cloak can-swipe-back="false" view-title="Item details">' +
                '<ion-content has-bouncing="false"  >' +
                  '<login></login>' +
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
      .state('app.myOrders', {
        url: '/myOrders',
        resolve: {
          items: ['MockedData', function (MockedData) {
            return MockedData.getItems();
          }],
          orders: ['MockedData', function (MockedData) {
            return MockedData.getOrders();
          }],
          orderItems:['MockedData', function (MockedData) {
            return MockedData.getOrderItems();
          }]
        },
        views: {
          'content@app': {
            template:
              '<ion-view ng-cloak can-swipe-back="false" view-title="My Orders">' +
                '<ion-content has-bouncing="false"  >' +
                  '<my-orders></my-orders>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    /* MY PROFILE */
    .state('app.myProfile', {
        url: '/my-profile',
        resolve: {
            users: ['MockedData', function(MockedData) {
                return MockedData.getUsers();
            }]
        },
        views: {
          'content@app': {
            template:
              '<ion-view ng-cloak can-swipe-back="false" view-title="My Profile">' +
                '<ion-content has-bouncing="false"  >' +
                  '<my-profile></my-profile>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    ;
  }
})();