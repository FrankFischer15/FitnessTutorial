'use strict';

var fitnessTutorialControllers = angular.module('fitnessTutorialControllers', []);

fitnessTutorialControllers.controller('routeCtrl',
	function($scope){
		$scope.template = {
			"navbar": "partials/navbar.html",
			"footer": "partials/footer.html"
		};
});

