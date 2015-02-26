'use strict';

var fitnessTutorialApp = angular.module('fitnessTutorialApp', [
	'ngRoute',
	'fitnessTutorialControllers',
	'angular.filter'
	// 'fitnessTutorialServices'
	]);

fitnessTutorialApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl',
		}).
		when('/muscleGroup/all', {
			templateUrl: 'partials/exerciseGrid.html',
			controller: 'allCtrl'
		}).
		when('/muscleGroup/:muscleGroup', {
			templateUrl: 'partials/exerciseGrid.html',
			controller: 'groupCtrl'
		}).
		when('/exercises/:exerciseId', {
			templateUrl: 'partials/exerciseDetails.html',
			controller: 'detailsCtrl'
		}).
		when('/dos-donts', {
			templateUrl: 'partials/dos-donts.html'
		}).
		when('/tips', {
			templateUrl: 'partials/tips.html'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);