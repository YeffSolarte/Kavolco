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
                templateUrl: "home.html"
            })
            .state('services', {
                url: "/services",
                templateUrl: "services.html"
            })
            .state('aboutUs', {
                url: "/aboutUs",
                templateUrl: "aboutUs.html"
            })
            .state('contactUs', {
                url: "/contactUs",
                templateUrl: "contactUs.html"
            });
    }

})();
// <script type="text/ng-template" id="PurchaseNavTemplate.html"></script>