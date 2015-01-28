'use strict';

/**
 * @ngdoc overview
 * @name aiStateGeneratorApp
 * @description
 * # aiStateGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('aiStateGeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/describer', {
        templateUrl: 'views/describer.html',
        controller: 'DescriberCtrl'
      })
      .when('/viewer', {
        templateUrl: 'views/viewer.html',
        controller: 'ViewerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
