var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
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

    .when('/forecast/:days', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastCtrl'
    })
}])

//CONTROLLERS

weatherApp.controller('mainCtrl', ['$scope', 'city', function($scope, city){
  $scope.name = city.name;

  $scope.$watch('name', function(){
    city.name = $scope.name;
  })
}])

weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', '$resource', 'city', function($scope, $routeParams, $resource, city){
  $scope.name = city.name;
  $scope.days = $routeParams.days || '2';
  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b75b6d85630e2ef1226b8e3df6bf933b', {callback: "JSON_CALLBACK"}, {get: {method: 'JSONP'}});

  $scope.weather = $scope.weatherAPI.get({q: $scope.name, cnt: $scope.days});

  $scope.convertToFarenheit = function(degK){
    return Math.round(1.8 * degK - 459.67);
  };

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }


}])


//SERVICES

weatherApp.service('city', function(){
  this.name = 'New York, NY';
})

// DIRECTIVES

weatherApp.directive('weatherReport', function(){
  return {
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      convertDate: '&',
      convertTemp: '&',
      weath: '=',
      dateFormat: '@'
    }
  }
})
