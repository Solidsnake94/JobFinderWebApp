(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('dashboardController', dashboardController);

    dashboardController.inject = ['$scope','$state', 'authenticationService'];

    function dashboardController($scope,$state, authenticationService) {
        var vm = this;

        $scope.user = localStorage.getItem('ls.jobFinder-username');
        console.log($scope.user);
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