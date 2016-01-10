weatherApp.controller('mainCtrl', ['$scope', 'city', function($scope, city){
  $scope.name = city.name;

  $scope.$watch('name', function(){
    city.name = $scope.name;
  })
}])
