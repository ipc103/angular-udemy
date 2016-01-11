var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
weatherApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainCtrl as main'
    })//when takes two arguments - the 'route and an object'

    .when('/forecast', {
      templateUrl: 'templates/forecast.html',
      controller: 'forecastCtrl as forecast'
    })

    .when('/forecast/:days', {
      templateUrl: 'templates/forecast.html',
      controller: 'forecastCtrl as forecast'
    })
}])
