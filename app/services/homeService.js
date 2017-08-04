(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .factory('homeService', homeService);

    homeService.inject = ['$http'];
    function homeService(http) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();