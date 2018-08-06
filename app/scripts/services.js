
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
                var config = {
                    headers:  {'Content-Type': 'application/x-www-form-urlencoded'}
                }
                return $http.post(urlBase+"/inscrever",$scope.dados);
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