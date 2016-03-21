(function () {
	'use strict';
	
	angular
		.module('ngCartExample.stores')
		.constant('OrdersConstants', {
			ORDER_UPDATE: 'order.update'
		})
		.factory('OrdersAction', OrdersAction)
		.store('OrdersStore', OrdersStore);
	
	OrdersStore.$inject = ['$q', 'OrdersConstants', 'MockedData'];
	function OrdersStore ($q, OrdersConstants, MockedData) {
		//var _item = null; it is really useful?
		
		var returnStore = {
			handlers: [],
			exports: {
				getOrderById: function (orderId) {
					var defer = $q.defer();
					
					MockedData.getOrders().then(function (_orders) {
						_orders.forEach(function (_order) {
							if (orderId === _order.id) {
								defer.resolve(_order);
							}
						});
					});
					
					return defer.promise;
				},
				getOrders: function () {
					//var defer = $q.defer();
					return MockedData.getOrders();
				}
			}
		};
		
		returnStore.handlers[OrdersConstants.ORDER_UPDATE] = function (order) {
			this.emit(OrdersConstants.ORDER_UPDATE, order);
		};
		
		return returnStore;
	};
	
	OrdersAction.$inject = ['flux', 'OrdersConstants', 'MockedData'];
	function OrdersAction (flux, OrdersConstants, MockedData) {
		return {
			updateOrder: function () {
				return MockedData.getOrder().then(function (orders) {
					flux.dispatch(OrdersConstants.ORDER_UPDATE, orders[0]);//fake update
				});
			}
		}
	};
})();