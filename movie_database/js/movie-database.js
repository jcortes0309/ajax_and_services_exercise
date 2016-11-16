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

  service.movieDetails = function(movieID) {
    var url = "http://api.themoviedb.org/3/movie/" + movieID;
    console.log(url);
    return $http({
      method: "GET",
      url: url,
      params: { api_key: API_KEY }
    });
  };

  service.movieSearch = function(queryText) {
    var url = "http://api.themoviedb.org/3/search/movie";
    return $http({
      method: "GET",
      url: url,
      params: {
        api_key: API_KEY,
        query: queryText
       }
    });
  };

  return service;
});


app.controller("MainController", function($scope, MovieService) {
  $scope.nowPlaying = function() {
    MovieService.nowPlaying().success(function(movieResults) {
      // movie results
      console.log("Movie results: ", movieResults);
      $scope.api_results = movieResults;
      $scope.results = $scope.api_results.results;
    });
  };

  var movieID = $scope.movieID;
  $scope.movieDetails = function(movieID) {
    MovieService.movieDetails(movieID).success(function(movieDetails) {
      // movie details
      $scope.api_results = movieDetails;
      $scope.movie_details = $scope.api_results;
    });
  };

  var queryText = $scope.queryText;
  $scope.movieSearch = function(queryText) {
    console.log("Clicked the movieSearch button");
    MovieService.movieSearch(queryText).success(function(moviesFound) {
      // movies found
      $scope.api_results = moviesFound;
      $scope.movies = $scope.api_results.results;
      console.log($scope.movies);
    });
  };

});
