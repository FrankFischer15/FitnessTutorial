'use strict';

var fitnessTutorialApp = angular.module('fitnessTutorialApp', [
	'ngRoute',
	'fitnessTutorialControllers'
	]);

fitnessTutorialApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'routeCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);