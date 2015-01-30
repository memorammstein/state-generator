'use strict';

/**
 * @ngdoc function
 * @name aiStateGeneratorApp.controller:ViewerCtrl
 * @description
 * # ViewerCtrl
 * Controller of the aiStateGeneratorApp
 */
angular.module('aiStateGeneratorApp')
  .controller('ViewerCtrl', function ($scope, localStorageService) {
    
    $scope.refreshViewer = function () {
    	$scope.states = localStorageService.get('stateObjectArray') || [];
    }

    $scope.refreshViewer();

  });
