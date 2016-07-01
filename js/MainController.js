(function(){
    angular.module('kavolcoApp')
        .controller('MainController',MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope){
        var vm = this;
        vm.rotateBtn = false;


        $scope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            vm.rotateBtn = false;
        });

    }
})();