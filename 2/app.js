// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {
    console.log($scope);
    $scope.name = "Ian";
    console.log($scope);
}]);
