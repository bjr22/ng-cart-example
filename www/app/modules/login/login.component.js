(function () {
	'use strict';
	
	angular
		.module('ngCartExample.login', [])
		.directive('login', loginDirective);
	
	loginDirective.$inject = [];
	function loginDirective() {
		return {
			restrict: 'E',
			scope: {},
			controller: loginController,
			controllerAs: 'login',
			templateUrl: 'app/modules/login/login.html'
		}
	}
	
	loginController.$inject = ['$scope'];
	function loginController($scope) {
		var vm = this;
	}
})();