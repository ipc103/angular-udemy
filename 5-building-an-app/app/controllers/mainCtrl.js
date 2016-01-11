weatherApp.controller('mainCtrl', ['$scope', '$location', 'city', function($scope, $location, city){
  this.name = city.name;
  var self = this;
  $scope.$watch(angular.bind(self.name, function(){
    city.name = self.name;
  }))

  this.submit = function(){
    $location.path('/forecast')
  }
}])
