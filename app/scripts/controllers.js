app.controller("eventos", function ($scope, EventosService) {
    var retorno;

    EventosService.getEventos()
    .then(retorno => {
        if("error" in retorno) {
            console.log("DEU RUIM");
        } else {
            retorno = retorno.data;
            $scope.eventos = retorno;
        }
    })
});