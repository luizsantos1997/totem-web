var app = angular.module("totem-web", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "eventos.html"
    })
    .when("/evento/:id", {
        templateUrl : "evento.html"
    })
    .when("/adm/evento/cadastrar", {
        templateUrl : "adm/cadastrarEvento.html"
    })
    .when("/adm/evento/:id/editar", {
        templateUrl : "adm/editarEvento.html"
    })
    .when("/adm/curso/cadastrar", {
        templateUrl : "adm/cadastrarCurso.html"
    })
    .when("/adm/curso/:id/editar", {
        templateUrl : "adm/editarCurso.html"
    })
    .when("/adm/instituicao/cadastrar", {
        templateUrl : "adm/cadastrarInstituicao.html"
    })
    .when("/adm/instituicao/:id/editar", {
        templateUrl : "adm/editarInstituicao.html"
    })
    .when("/credenciamento", {
        templateUrl : "credenciamento.html"
    });
});