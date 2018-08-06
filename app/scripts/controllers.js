app.controller("eventos", function ($scope, EventosService) {
    var retorno;

    EventosService.getEventos()
    .then(retorno => {
        if("error" in retorno.data) {
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
        if("error" in retorno.data){
            console.log(retorno.error);
        } else {
            retorno = retorno.data;
            $scope.evento = retorno[0];
        }

    });
});


app.controller("inscricao", function($scope,$route,InscricaoService,InstituicoesService,CursosService) {
    var evento_id = $route.current.params.id;
    $scope.responseClass = '';
    $scope.selectedFacul = '';
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
        if("error" in retorno.data){

        } else {
            $scope.cursos = retorno.data;
        }

    });
    
    $scope.instituicoes = InstituicoesService.getInstituicoes().
    then(retorno => {
        if("error" in retorno.data){

        } else {
            $scope.instituicoes = retorno.data;
        }
    });


    $scope.submitForm = function() {
         if ($scope.selectedFacul.id == undefined){
            $scope.responseClass = "danger";
            $scope.inscricaoResposta = "Por favor informe a faculdade";
            return;
        } else if($scope.selectedCurso.id == undefined) {
            $scope.responseClass = "danger";
            $scope.inscricaoResposta = "Por favor informe o curso";
            return;
        }

        $scope.dados.id_curso = $scope.selectedCurso.id;
        $scope.dados.id_faculdade = $scope.selectedFacul.id;
        InscricaoService.inscrever($scope).
        then(retorno => {
            if(retorno.data.error == true) {
                $scope.responseClass = "danger";
                $scope.inscricaoResposta = retorno.data.message;
            } else {
                $scope.responseClass = "success";
                $scope.inscricaoResposta = retorno.data.message;
                $scope.dados = {};
                $scope.selectedFacul = {};
                $scope.selectedCurso = {};
                $scope.inscricao_form.$setPristine();
                $scope.inscricao_form.$setValidity();
                $scope.inscricao_form.$setUntouched();
            }
        })
    }
});