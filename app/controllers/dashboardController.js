(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('dashboardController', dashboardController);

    dashboardController.inject = ['$scope', '$state', 'authenticationService', 'localStorageService'];

    function dashboardController($scope, $state, authenticationService, localStorageService) {
        var vm = this;


        $scope.user = localStorage.getItem('ls.jobFinder-username').replace(/^"(.*)"$/, '$1');
      
        // VARIABLES =======================

        vm.logout = function () {
            authenticationService.logout();
            $state.go("no-access", {}, { reload: true });

        }
        activate();

        // PUBLIC FUNCTIONS ================


        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();