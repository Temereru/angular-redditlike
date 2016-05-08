var app = angular.module('angular-redditlike', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/");

$stateProvider
    .state('List', {
      url: "/",
      templateUrl: "list.html"
    });
  $stateProvider
    .state('Single', {
      url: "/post",
      templateUrl: "post.html"
    });

});