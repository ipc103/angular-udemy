weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', 'city', 'weatherService', function($scope, $routeParams, city, weatherService){
  $scope.name = city.name;
  $scope.days = $routeParams.days || '2';

  $scope.weather = weatherService.weather($scope.name, $scope.days);

  $scope.convertToFarenheit = function(degK){
    return Math.round(1.8 * degK - 459.67);
  };

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }


}])
