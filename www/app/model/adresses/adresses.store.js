(function () {
	'use strict';

	angular
		.module('ngCartExample.stores')
		.constant('AddressesConstants', {
			ADDRESS_UPDATE: 'address.update'
		})
		.factory('AddressesAction', AddressesAction)
		.store('AddressesStore', AddressesStore);

	AddressesStore.$inject = ['$q', 'AddressesConstants', 'MockedData'];
	function AddressesStore ($q, AddressesConstants, MockedData) {
		var _address = null;

		var returnStore = {
			handlers: [],
			exports: {
				getAddressById: function (addressId) {
					var defer = $q.defer();
					if (!(_address && _address.id === addressId)) {
						MockedData.getShipmentAddresses().then(function (addresses) {
							addresses.forEach(function (_addr) {
								if (addressId === _addr.id) {
									_address = _addr;
									defer.resolve(_address);
								}
							}); 
						});
					} else {
						defer.resolve(_address);
					}
					return defer.promise;
				}
			}
		};

		returnStore.handlers[AddressesConstants.ADDRESS_UPDATE] = function (address) {
			_address = null;
			this.emit(AddressesConstants.ADDRESS_UPDATE, address);
		};

		return returnStore;
	};

	AddressesAction.$inject = ['flux', 'AddressesConstants', 'MockedData'];
	function AddressesAction (flux, AddressesConstants, MockedData) {
		return {
			updateAddress: function () {
				return MockedData.getShipmentAddresses().then(function (_addresses) {
					flux.dispatch(AddressesConstants.ADDRESS_UPDATE, _addresses[1]); //fake update
				});
			}
		}
	};
})();