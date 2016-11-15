var app = angular.module("movie-database", ["ui.router"]);

app.factory("MovieService", function($http) {
  var service = {};
  var API_KEY = "06700781243c60769490b4e1bc29685c";
  service.nowPlaying = function() {
    var url = "http://api.themoviedb.org/3/movie/now_playing";
    return $http({
      method: "GET",
      url: url,
      params: { api_key: API_KEY }
    });
  };
  return service;
});

app.controller("MainController", function($scope, MovieService) {

  $scope.nowPlaying = function() {
    MovieService.nowPlaying().success(function(movieResults) {
      // got movie results
      console.log("Movie results: ", movieResults);
    });
  };

});

// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state({
//       name: "home",
//       url: "/",
//       templateUrl: ""
//     });
// });
