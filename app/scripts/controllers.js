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
    });
});

app.controller("eventoInterna", function($scope,$route, EventosService){
    var retorno;
    var id = $route.current.params.id;
    EventosService.getEvento(id).
    then(retorno => {
        if("error" in retorno){
            console.log(retorno.error);
        } else {
            retorno = retorno.data;
            $scope.evento = retorno[0];
        }

    });
});


app.controller("inscricao", function($scope,$route,InscricaoService,InstituicoesService,CursosService) {
    var evento_id = $route.current.params.id;

    $scope.selecedFacul = '';
    $scope.selectedCurso = '';
    $scope.dados = {
        nome: '',
        id_faculdade: '',
        email: '',
        telefone: '',
        matricula: '',
        id_curso: '',
        id_evento: evento_id
    };
    
    $scope.cursos = CursosService.getCursos().
    then(retorno => {
        if("error" in retorno){

        } else {
            $scope.cursos = retorno.data;
        }

    });
    
    $scope.instituicoes = InstituicoesService.getInstituicoes().
    then(retorno => {
        if("error" in retorno){

        } else {
            $scope.instituicoes = retorno.data;
        }
    });


    $scope.submitForm = function() {
        $scope.dados.id_curso = $scope.selectedCurso.id;
        $scope.dados.id_faculdade = $scope.selectedFacul.id;
        console.log($scope.dados);
    }
});