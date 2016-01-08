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

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.service('nameService', function(){
  this.name = "John Doe";
  this.namelength = function(){
    return this.name.length;
  }
})

myApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService) {

  $scope.name = nameService.name;

  $scope.$watch('name', function(){ //watches for changes to name - as it's updated, resets the nameService singleton property
    nameService.name = $scope.name;
  })

  $log.main = "Property from main!";
  $log.log(nameService.namelength());
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {

  $scope.name = nameService.name; // scope is a ChildScope - it's different for each controller

  $scope.$watch('name', function(){ //watches for changes to name - as it's updated, resets the nameService singleton property
    nameService.name = $scope.name;
  })
  
  $scope.num = $routeParams.num || "There is no route";

  $log.sec = "Property from second!";
  $log.log($log); // log is a singleton, it's the same object for each controler

}]);
