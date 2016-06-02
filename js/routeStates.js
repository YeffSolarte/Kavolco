(function(){
    'use strict';
    angular.module('kavolcoApp')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routesConfig($stateProvider, $urlRouterProvider, $httpProvider){

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html"
            })
            .state('aboutUS', {
                url: "/aboutUS",
                templateUrl: "views/aboutUS.html"
            });
    }

})();