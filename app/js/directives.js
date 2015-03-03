'use strict';

var fitnessTutorialDirectives = angular.module('fitnessTutorialDirectives', []);

fitnessTutorialDirectives.directive('chosen',
	function() {
	// var linker = function($scope, $element) {
	// 	$scope.$watch('exerciseSrchList', function() {
	// 		console.log("working")
	// 		$element.trigger("chosen:updated");
	// 	});
	// 	$element.chosen();
	// };
	return {
		restrict: 'A',
		link: function($scope, $element, $attrs) {
			$scope.$watch('exerciseSrchList', function(){
				console.log("hello")
			})
		}
		
	}
});



// var fitnessTutorialDirectives = angular.module('fitnessTutorialDirectives', []);

// fitnessTutorialDirectives.directive('chosen',
// 	function() {
// 	var linker = function($scope, $element) {
// 		$scope.$watch('exerciseSrchList', function() {
// 			console.log("working")
// 			$element.trigger("chosen:updated");
// 		});
// 		$element.chosen();
// 	};
// 	return {
// 		restrict: 'A',
// 		link: linker
// 	};
// });