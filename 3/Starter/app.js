var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {



});

var searchPeople = function (firstname, lastname, height, age, occupation){
  return 'Jimi Hendrix'
}

console.log(searchPeople); //you can take any function and turn it into a string
//angular takes the function you pass to the controller and parses the names of the arguments. Based on the names that you give, it includes different services
var searchPeopleAnnotated =  angular.injector().annotate(searchPeople);
console.log(searchPeopleAnnotated);
// #=> ["firstname", "lastname", "height", "age", "occupation"]
// Because it's looking for certain names, the arguments can be order independent
