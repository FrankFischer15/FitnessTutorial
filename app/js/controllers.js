'use strict';

var fitnessTutorialControllers = angular.module('fitnessTutorialControllers', []);

fitnessTutorialControllers.controller('navbarCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('exercises/muscleGroups.json').success(function(data) {
            $scope.muscleGroups = data;
            $scope.orderProp = 'muscleGroup';
        });
        $http.get('exercises/exercises.json').success(function(data) {
            $scope.exercises = data;
            $scope.orderProp = 'name';
            console.log(data);
        });
    }]);

fitnessTutorialControllers.controller('homeCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('exercises/muscleGroups.json').success(function(data) {
            $scope.muscleGroups = data;
        });
        $scope.orderProp = 'muscleGroup';
    }]);