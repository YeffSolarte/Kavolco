(function(){
    angular.module('kavolcoApp')
        .controller('MainController',MainController);

    MainController.$inject = ['$scope', '$uibModal'];
    ModalController.$inject = ['$scope','$uibModalInstance'];

    function MainController($scope,$uibModal){
        var vm = this;
        vm.rotateBtn = false;

        
        $scope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            vm.rotateBtn = false;
        });


        vm.openModalProductsAndServices = function(param){
            var template = '';
            if(param === "services"){
                template = 'views/servicesModal.html';
            }else if(param == "machines"){
                template = 'views/machinesModal.html';
            }else{
                template = 'views/experienceModal.html';
            }
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: template,
                controller: ModalController,
                controllerAs: 'mdCtrl',
                size: 'lg'
            });
        };

    }

    function ModalController($scope,$uibModalInstance){
        var vm = this;
        vm.closeModal = closeModal;

        function closeModal(){
            $uibModalInstance.close();
        }
    }
})();