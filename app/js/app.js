'use strict';

var fitnessTutorialApp = angular.module('fitnessTutorialApp', [
	'ngRoute',
	'fitnessTutorialControllers'
	// 'fitnessTutorialServices'
	]);

fitnessTutorialApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl',
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);