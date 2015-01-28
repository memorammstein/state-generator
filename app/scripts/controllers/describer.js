'use strict';

/**
 * @ngdoc function
 * @name aiStateGeneratorApp.controller:DescriberCtrl
 * @description
 * # DescriberCtrl
 * Controller of the aiStateGeneratorApp
 */
angular.module('aiStateGeneratorApp')
  .controller('DescriberCtrl', function ($scope, $rootScope, $location, $window) {

  	$rootScope.states = new Array();

  	$scope.states = new Array();
  	$scope.operators = new Array();

  	$scope.interactions = new Array();

  	$scope.splitString = function (string) {
  		return string.split(',');
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
    	$rootScope.states = tempStates;
    	$location.path('/viewer');
    }

  });
