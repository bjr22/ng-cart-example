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
            controller: 'AppCtrl',
            templateUrl: 'app/templates/layout.html'
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
                '<ion-content class="has-subheader" has-bouncing="false"  >' +
                  '<item-list></item-list>' +
                '</ion-content>' + 
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
                '<ion-content class="has-subheader" has-bouncing="false"  >' +
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
    
    .state('app.OrderDetail', {
        url: '/myOrders/:orderId',
        resolve: {
            allitems: ['MockedData', function (MockedData) {
                return MockedData.getItems();
            }],
            orderItems:['MockedData', function (MockedData) {
                return MockedData.getOrderItems();
            }]
        },
        views: {
          'content@app': {
            controller: ['$scope', '$stateParams', 'orderItems','allitems', function ($scope, $stateParams, orderItems,allitems) {

                var items = []
                var total = 0;
                
                orderItems.forEach(function (_order) {
                    console.log();
                    if (_order.orderId === $stateParams.orderId) {
                        items.push(_order.itemId);
                    }
                });
                
                for (var i = 0; i < items.length; ++i) {
                    allitems.forEach(function (_item) {
                       if(_item.id === items[i]) {
                           items[i] = _item;
                           total += _item.price;
                       } 
                    });
                } 
                
                $scope.items = items;
                $scope.total = total;
            }], 
            template: 
              '<ion-view ng-cloak can-swipe-back="false" view-title="My Orders">' +
                '<ion-content has-bouncing="false"  >' +
                  '<my-orders-detail items="items" total="total"></my-orders-detail>' +
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

    /* MY OPINION */
    .state('app.myOpinion', {
        url: '/my-opinion/:item',
        resolve: {
            allitems: ['MockedData', function (MockedData) {
                return MockedData.getItems();
            }],
        },
        views: {
          'content@app': {
              controller: ['$scope', '$stateParams', 'allitems', function ($scope, $stateParams, allitems) {

                var item = null;  
                allitems.forEach(function (_item) {
                    if(_item.id === $stateParams.item) {
                        $scope.item = _item;
                    } 
                });
            }], 
            template:
              '<ion-view ng-cloak can-swipe-back="false" view-title="My Opinion">' +
                '<ion-content has-bouncing="false"  >' +
                  '<my-opinion item="item"></my-opinion>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    ;
  }
})();