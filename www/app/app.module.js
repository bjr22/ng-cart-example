(function () {
  'use strict';
  angular.module('ngCartExample', 
  [
    'ionic',
    
    //INSTALLED PLUGINS
    'ngCart',
    'ionic.rating',
    
    //STORES
    'ngCartExample.stores',
    
    //DIRECTIVES
    'ngCartExample.onSaleItem',
    'ngCartExample.onSaleItemList',
    'ngCartExample.cartSummary',
    'ngCartExample.opinionList',
    'ngCartExample.itemDetails',
    'ngCartExample.myProfile'
  ]);
})();