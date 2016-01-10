weatherApp.directive('weatherReport', function(){
  return {
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      convertDate: '&',
      convertTemp: '&',
      weath: '=',
      dateFormat: '@'
    }
  }
})
