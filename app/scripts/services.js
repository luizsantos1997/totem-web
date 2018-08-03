
app.factory('EventosService', 
    ['$http',
        function($http) {
            var urlBase = "http://localhost/totem-api";

            this.getEventos = function() {
               return $http.get(urlBase+"/eventos");
            }

            return this;
        }
    ]
);