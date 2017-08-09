(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('dashboardController', dashboardController);

    dashboardController.inject = ['$scope','authenticationService'];

    function dashboardController($scope,authenticationService) {
        var vm = this;
        
        vm.user = authenticationService.authentication.username;
        // VARIABLES =======================

        activate();

        // PUBLIC FUNCTIONS ================


        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();