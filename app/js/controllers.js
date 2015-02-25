'use strict';

var fitnessTutorialControllers = angular.module('fitnessTutorialControllers', []);

fitnessTutorialControllers.controller('navbarCtrl', ['$scope', '$http',
  function($scope, $http) {
  	$http.get('exercises/muscleGroups.json').success(function(data) {
  	$scope.exercises = data;
  	console.log(data)
  	});
  	$scope.orderProp = 'muscleGroup';
  }]);

fitnessTutorialControllers.controller('homeCtrl', ['$scope', '$http',
  function($scope, $http) {
  	$http.get('exercises/muscleGroups.json').success(function(data) {
  	$scope.exercises = data;
  	console.log(data)
  	});
  	$scope.orderProp = 'muscleGroup';
  }]);