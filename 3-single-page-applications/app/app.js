var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){ // method that takes a function, inject route provider
  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
})
myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  $scope.name = "Ian - Main Page"

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  $scope.name = "Jimi - Second Page"

}]);
