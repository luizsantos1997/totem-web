
app.factory('EventosService', 
    ['$http',
        function($http) {
            var urlBase = "http://localhost/totem-api";

            this.getEventos = function() {
               return $http.get(urlBase+"/eventos");
            }

            this.getEvento = function(id) {
                console.log(id);
                return $http.get(urlBase+"/evento/"+id);
            }

            return this;
        }
    ]
);

app.factory('InscricaoService',
    ['$http',
        function($http){
            var urlBase = "http://localhost/totem-api";


            this.inscrever = function($scope) {
                $http({
                    data: $.param({ nome: $scope.nome
                    }),
                    method: 'POST',
                    url: urlBase+"/inscrever",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            }

            return this;
        }
    ]


);


app.factory('InstituicoesService', 
    ['$http',
        function($http) {
            var urlBase = "http://localhost/totem-api";

            this.getInstituicoes = function() {
               return $http.get(urlBase+"/instituicoes");
            }

            return this;
        }
    ]
);


app.factory('CursosService', 
    ['$http',
        function($http) {
            var urlBase = "http://localhost/totem-api";

            this.getCursos = function() {
               return $http.get(urlBase+"/cursos");
            }

            return this;
        }
    ]
);