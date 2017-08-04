(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('homeController', homeController);

    homeController.inject = ['$scope'];

    function homeController($scope) {
        var vm = this;
        
    }
})();