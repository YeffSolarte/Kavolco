(function(){
    angular.module('kavolcoApp')
        .factory('mainFactory',mainFactory);

    mainFactory.$inject = ['$http', '$q'];

    function mainFactory($http,$q){
        return {
            sendEmailTo : sendEmailTo
        };


        function sendEmailTo(data){
            return $q(function (resolve, reject) {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8080/kavolco/kavolco.php',
                    cache : false,
                    data : data
                }).then(function (response) {
                    resolve(response);
                }, function (reason) {
                    console.log(reason);
                    reject(reason);
                });
            });
        }
    }
})();