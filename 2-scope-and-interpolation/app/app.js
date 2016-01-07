var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$timeout', '$filter',  function($scope, $timeout, $filter) {

  $scope.name = "Ian";
  $scope.handle = "";
  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  }
}]);
