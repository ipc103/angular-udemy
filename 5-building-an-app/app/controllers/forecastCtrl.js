weatherApp.controller('forecastCtrl', ['$routeParams', 'city', 'weatherService', function($routeParams, city, weatherService){
  this.name = city.name;
  this.days = $routeParams.days || '2';

  this.weather = weatherService.weather(this.name, this.days);

  this.convertToFarenheit = function(degK){
    return Math.round(1.8 * degK - 459.67);
  };

  this.convertToDate = function(dt){
    return new Date(dt * 1000);
  }


}])
