(function(){
    angular.module('kavolcoApp')
        .controller('MainController',MainController);

    MainController.$inject = ['$scope', '$uibModal', 'mainFactory'];
    ModalController.$inject = ['$scope','$uibModalInstance'];

    function MainController($scope,$uibModal, mainFactory){
        var vm = this;
        vm.rotateBtn = false;
        vm.newContact = {};

        vm.clearFormContact = clearFormContact;

        
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

        vm.submitFormContact = function(){
            if(vm.contactForm.$valid){
                mainFactory.sendEmailTo(vm.newContact).then(function success(response){
                    alert("CARAJO LO ENVIOOO!!! :D ");
                    console.log(response);
                    clearFormContact();
                }, function error(reason){
                    alert("CARAJO NO LO ENVIOOOOOOO :( :( ");
                    console.log(reason);
                });
            }else{

            }
        };

        function clearFormContact(){
            vm.newContact = {};
        }

    }

    function ModalController($scope,$uibModalInstance){
        var vm = this;
        vm.closeModal = closeModal;

        function closeModal(){
            $uibModalInstance.close();
        }
    }
})();