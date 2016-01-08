var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

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

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $scope.people = [
    {
      name: "John Doe",
      city: "Pittsburgh",
      state: "PA",
      zip: "15218"},
    {
      name: "Antonio Brown",
      city: "Pittsburgh",
      state: "PA",
      zip: "15201"},
    {
      name: "Mario Lemieux",
      city: "Pittsburgh",
      state: "PA",
      zip: "15690"},
    {
      name: "Jaromir Jagr",
      city: "Pittsburgh",
      state: "PA",
      zip: "90210"},
  ]

  $scope.formattedAddress = function(person){
    return "Formatted: " + person.city + ", " + person.state + " " + person.zip;
  }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {



}]);

myApp.directive('searchResult', function(){
  return {
    restrict: 'AECM', //allow Attribute, Element, Classname, Comment
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personName: "@", //text for the directive, one way binding
      person: "=", //this is a two way binding
      formattedAddressFunction: "&" // this sends a function definition
    },
    link: function(scope, elements, attributes){
          // gets run once for each time something in the directive is generated
          // binds or links it into the DOM - for an array of 50 people, will get called 50 times
      console.log("Postlinking...");
      console.log(elements);
    },
    transclude: true
  }
})
