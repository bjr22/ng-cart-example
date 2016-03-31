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
    
    //DIRECTIVE MODULES
    'ngCartExample.itemInfo',
    'ngCartExample.opinionList',
    
    //SCREEN MODULES
    'ngCartExample.itemList',
    'ngCartExample.cartSummary',
    'ngCartExample.itemDetails',
    'ngCartExample.myProfile',
    'ngCartExample.myOrders',
	'ngCartExample.login',
    'ngCartExample.myOrdersDetail',
    'ngCartExample.myOpinion'
  ]);
})();