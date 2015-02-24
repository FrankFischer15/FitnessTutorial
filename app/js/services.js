
var fitnessTutorialServices = angular.module('fitnessTutorialServices', ['ngResource']);

fitnessTutorialServices.factory('Exercise', ['$resource',
  function($resource){
    return $resource('exercises/:exerciseName.json', {}, {
      query: {method:'GET', params:{exerciseName:'exercises'}, isArray:true}
    });
  }]);