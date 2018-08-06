var app = angular.module("totem-web", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "eventos.html"
    })
    .when("/evento/:id", {
        templateUrl : "evento.html"
    });
});