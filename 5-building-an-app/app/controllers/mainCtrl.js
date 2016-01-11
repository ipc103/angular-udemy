weatherApp.controller('mainCtrl', ['$scope', '$location', 'city', function($scope, $location, city){
  $scope.name = city.name;

  $scope.$watch('name', function(){
    city.name = $scope.name;
  })

  $scope.submit = function(){
    $location.path('/forecast')
  }
}])
