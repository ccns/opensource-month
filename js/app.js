var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/indexview.html'
  }).otherwise({ redirectTo: '/' });
});
