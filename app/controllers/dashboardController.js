(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('dashboardController', dashboardController);

    dashboardController.inject = ['$scope'];

    function dashboardController($scope) {
        var vm = this;
        

        // VARIABLES =======================

        activate();

        // PUBLIC FUNCTIONS ================


        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();