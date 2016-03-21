(function () {
	'use strict';
	
	angular
		.module('ngCartExample.stores')
		.constant('OpinionsConstants', {
			OPINION_UPDATE: 'opinion.update'
		})
		.factory('OpinionsAction', OpinionsAction)
		.store('OpinionsStore', OpinionsStore);
	
	OpinionsStore.$inject = ['$q', 'OpinionsConstants', 'MockedData'];
	function OpinionsStore ($q, OpinionsConstants, MockedData) {
		//var _item = null; it is really useful?
		
		var returnStore = {
			handlers: [],
			exports: {
				getOpinonById: function (opinionId) {
					var defer = $q.defer();
					
					MockedData.getOpinions().then(function (_opinions) {
						_opinions.forEach(function (_opinion) {
							if (opinionId === _opinion.id) {
								defer.resolve(_opinion);
							}
						});
					});
					
					return defer.promise;
				},
				getOpinions: function () {
					//var defer = $q.defer();
					return MockedData.getOpinions();
				}
			}
		};
		
		returnStore.handlers[OpinionsConstants.OPINION_UPDATE] = function (opinion) {
			this.emit(OpinionsConstants.OPINION_UPDATE, opinion);
		};
		
		return returnStore;
	};
	
	OpinionsAction.$inject = ['flux', 'OpinionsConstants', 'MockedData'];
	function OpinionsAction (flux, OpinionsConstants, MockedData) {
		return {
			updateOpinion: function () {
				return MockedData.getOpinions().then(function (opinions) {
					flux.dispatch(OpinionsConstants.OPINION_UPDATE, opinions[0]);//fake update
				});
			}
		}
	};
})();