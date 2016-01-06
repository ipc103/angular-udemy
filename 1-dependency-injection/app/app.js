var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', function($scope, $log, $filter, $resource) {
  $scope.name = "Ian";
  $scope.formattedName = $filter('uppercase')($scope.name);
  $log.info($scope.name)
  $log.log($scope.formattedName)

}]);
