'use strict';

/**
 * @ngdoc function
 * @name aiStateGeneratorApp.controller:ViewerCtrl
 * @description
 * # ViewerCtrl
 * Controller of the aiStateGeneratorApp
 */
angular.module('aiStateGeneratorApp')
  .controller('ViewerCtrl', function ($scope, $rootScope) {
    
    $scope.refreshViewer = function () {
    	$scope.states = $rootScope.states || [];
    }

    $scope.refreshViewer();

  });
