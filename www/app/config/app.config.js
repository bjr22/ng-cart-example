(function (){
  'use strict';
  
  angular
    .module('ngCartExample')
    .config(configApp)
    .run(runApp)
  
  configApp.$inject = [];
    function configApp() {

    }
  
  runApp.$inject = ['$ionicPlatform', '$log', '$rootScope'];
    function runApp($ionicPlatform, $log, $rootScope) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }
})();