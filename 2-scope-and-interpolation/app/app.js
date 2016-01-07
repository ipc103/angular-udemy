var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$timeout', '$filter',  function($scope, $timeout, $filter) {

  $scope.name = "Ian";
  $scope.handle = "";
  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  setTimeout(function(){
    $scope.$apply(function(){ // because we're outside context of Angular's, changing the scope's name won't be included as part of the Digest cycle unless we manually apply it to the $scope. This is what $timeout does for you. 
      $scope.name = "Jimi";
    })
  }, 3000)

}]);