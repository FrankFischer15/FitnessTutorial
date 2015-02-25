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
		when('/muscleGroup/:groupName', {
			templateUrl: 'partials/groupGrid.html',
			controller: 'gridCtrl'
		}).
		when('/exercises/:exerciseId', {
			templateUrl: 'partials/exerciseDetails.html',
			controller: 'detailsCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);