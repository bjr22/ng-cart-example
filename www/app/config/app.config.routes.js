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
              '<ion-view ng-cloak can-swipe-back="false" view-title="NgCartExample">' +
                '<ion-content has-bouncing="false"  >' +
                  '<cart-item-list></cart-item-list>' +
                '</ion-content>' + 
              '</ion-view>'
          }
        }
      })
    ;
  }
})();