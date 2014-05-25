(function (angular, undefined) {
    "use strict";
    var sudsModule = angular.module("sudsModule", ['ngRoute'])
    .service("beerService", ["$http", function beerService($http) {
        this.getBeers = function () {
            return $http.get("/beers");
        };
    }])
    .controller("indexController", [function () {
    }])
    .controller("newbeerController", [function () {
    }])
    .controller("beerlistController", ["$scope", "beerService", function indexController($scope, beerService) {
        $scope.beers = [];
        var init = function() {
            beerService.getBeers()
            .success(function (data) {
                $scope.beers = data;
            })
            .error(function (data, status, headers, config) {
                console.error(status);
            });
        };
        init();
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "/views/home.html"
        })
        .when("/beerlist", {
            templateUrl: "/views/beerlist.html",
            controller: "beerlistController"
        })
        .when("/newbeer", {
            templateUrl: "/views/newbeer.html",
            controller: "newbeerController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    }]);
})(angular);
