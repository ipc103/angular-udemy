var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$timeout', '$filter', '$http', function($scope, $timeout, $filter, $http) {

  $scope.name = "Ian";
  $scope.handle = "";
  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.players = [
    {name: 'Antonio Brown'},
    {name: 'DeAngelo Williams'},
    {name: 'LeVeon Bell'},
    {name: 'Martavis Bryant'},
    {name: 'Cameron Heyward'}
  ]

  setTimeout(function(){
    $scope.$apply(function(){ // because we're outside context of Angular's, changing the scope's name won't be included as part of the Digest cycle unless we manually apply it to the $scope. This is what $timeout does for you.
      $scope.name = "Jimi";
    })
  }, 3000)

  $scope.alertClicked = function(){
    alert("You clicked me!");
  }

  // var rulesrequest = new XMLHttpRequest();
  // rulesrequest.onreadystatechange = function(){
  //     $scope.$apply(function(){
  //       if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
  //         $scope.gifs = JSON.parse(rulesrequest.responseText).data;
  //       }
  //     })
  //
  // }
  //
  // rulesrequest.open("GET", 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC', true);
  // rulesrequest.send();

  $http.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').then(function(response){
    $scope.gifs = response.data.data;
  })



}]);
