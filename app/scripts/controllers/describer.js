'use strict';

/**
 * @ngdoc function
 * @name aiStateGeneratorApp.controller:DescriberCtrl
 * @description
 * # DescriberCtrl
 * Controller of the aiStateGeneratorApp
 */
angular.module('aiStateGeneratorApp')
  .controller('DescriberCtrl', function ($scope, $location, $window, localStorageService) {

    $scope.statesString = localStorageService.get('statesString') || '';
    $scope.operatorsString = localStorageService.get('operatorsString') || '';

    $scope.$watch('statesString', function () {
      localStorageService.set('statesString', $scope.statesString);
    }, true);

    $scope.$watch('operatorsString', function () {
      localStorageService.set('operatorsString', $scope.operatorsString);
    }, true);

  	$scope.states = new Array();
  	$scope.operators = new Array();

  	$scope.interactions = new Array();

  	$scope.splitString = function (string) {
  		return string.split(';');
  	}

    $scope.listInteractions = function (statesArray, operatorsArray) {
    	$scope.states = statesArray;
    	$scope.operators = operatorsArray;
    	$scope.interactions = new Array();
    	for (var i = statesArray.length - 1; i >= 0; i--) {
    		for (var j = operatorsArray.length - 1; j >= 0; j--) {
    			$scope.interactions.push({origin: statesArray[i], operator: operatorsArray[j], linksTo: ''});
    		};
    	};
    }

    $scope.generateInteractions = function () {
    	$window.alert('Con esto puedes generar relaciones programáticamente si generas el código en el controlador');
    }

    $scope.generateStates = function (interactionsArray) {
    	var tempStates = new Array();
    	for (var i = $scope.states.length - 1; i >= 0; i--) {
    		tempStates.push({info: $scope.states[i], hasBeenvisited: false, links: []});
    	};
    	for (var i = interactionsArray.length - 1; i >= 0; i--) {
    		for (var j = tempStates.length - 1; j >= 0; j--) {
    			if (interactionsArray[i].origin == tempStates[j].info) {
    				tempStates[j].links.push({operator: interactionsArray[i].operator, linksTo: interactionsArray[i].linksTo});
    			};
    		};
    	};
    	localStorageService.set('stateObjectArray', tempStates);
    	$location.path('/viewer');
    }

  });
