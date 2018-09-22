var app = angular.module("totem-web", ["ngRoute"]);

function dateToMysqlString(data) {
    let dia = data.getDate() < 10 ? "0"+data.getDate() : data.getDate();
    let mes = (data.getMonth()+1) < 10 ? "0"+(data.getMonth()+1) : data.getMonth()+1;
    let horas = data.getHours() < 10 ? "0"+data.getDate() : data.getDate();
    let minutos = data.getMinutes() < 10 ? "0"+data.getMinutes() : data.getMinutes();
    let segundos = data.getSeconds() < 10 ? "0"+data.getSeconds() : data.getSeconds();
    return data.getFullYear() + "-" + mes + "-" + dia + " " + horas + ":" + minutos + ":" + segundos;
}


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
    });
});