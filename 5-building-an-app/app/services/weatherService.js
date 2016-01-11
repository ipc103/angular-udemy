weatherApp.service('weatherService', ['$resource', function($resource){
  this.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b75b6d85630e2ef1226b8e3df6bf933b', {callback: "JSON_CALLBACK"}, {get: {method: 'JSONP'}});

  this.weather = function(city, count){
    return this.weatherAPI.get({q: city, cnt: count})
  }
}])
