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

  	$scope.statesTree = {};
  	$scope.statesStack = {};
    
    $scope.refreshViewer = function () {
    	$scope.states = localStorageService.get('stateObjectArray') || [];
    }

    $scope.refreshViewer();

    $scope.reverseStates = function () {
    	localStorageService.set('stateObjectArray', $scope.states.reverse());
    	$scope.refreshViewer();
    }

	$scope.generateTree = function () {
		for (var i = $scope.states.length - 1; i >= 0; i--) {
	    	if ($scope.states[i].isInitialState) {
	    		$scope.statesTree.info = $scope.states[i].info;
	    		$scope.statesTree.hasBeenVisited = false;
	    		$scope.statesTree.childs = [];
	    	};
	    };
	}

	$scope.generateTree();

    $scope.deepSearch = function (objective) {
    	// body...
    }

    $scope.breadthSearch = function (objective) {
    	// body...
    }

  });
