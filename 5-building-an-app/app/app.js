var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainCtrl'
    })//when takes two arguments - the 'route and an object'

    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastCtrl'
    })
}])


weatherApp.controller('mainCtrl', ['$scope', function($scope){

}])

weatherApp.controller('forecastCtrl', ['$scope', function($scope){

}])
