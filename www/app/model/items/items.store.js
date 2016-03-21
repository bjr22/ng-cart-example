(function () {
	'use strict';
	
	angular
		.module('ngCartExample.stores')
		.constant('ItemsConstants', {
			ITEM_UPDATE: 'item.update'
		})
		.factory('ItemsAction', ItemsAction)
		.store('ItemsStore', ItemsStore);
	
	ItemsStore.$inject = ['$q', 'ItemsConstants', 'MockedData'];
	function ItemsStore ($q, ItemsConstants, MockedData) {
		//var _item = null; it is really useful?
		
		var returnStore = {
			handlers: [],
			exports: {
				getItemById: function (itemId) {
					var defer = $q.defer();
					
					MockedData.getItems().then(function (_items) {
						_items.forEach(function (_item) {
							if (itemId === _item.id) {
								defer.resolve(_item);
							}
						});
					});
					
					return defer.promise;
				},
				getItems: function () {
					//var defer = $q.defer();
					return MockedData.getItems();
				}
			}
		};
		
		returnStore.handlers[ItemsConstants.ITEM_UPDATE] = function (item) {
			this.emit(ItemsConstants.ITEM_UPDATE, item);
		};
		
		return returnStore;
	};
	
	ItemsAction.$inject = ['flux', 'ItemsConstants', 'MockedData'];
	function ItemsAction (flux, ItemsConstants, MockedData) {
		return {
			updateItem: function () {
				return MockedData.getItems().then(function (items) {
					flux.dispatch(ItemsConstants.ITEM_UPDATE, items[0]);//fake update
				});
			}
		}
	};
})();