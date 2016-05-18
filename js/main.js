(function(){
    angular.module('kavolcoApp', ['ui.bootstrap'])
        .controller('MainController',MainController);

    MainController.$inject = [];

    function MainController(){
        var vm = this;
    }
})();