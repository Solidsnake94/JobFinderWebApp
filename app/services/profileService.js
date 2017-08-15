(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('profileService', profileService);

    profileService.inject = ['$http', 'authenticationService'];
    function profileService($http, authenticationService) {

        var service = {};

        var getUserDetailsById = function (userId) {
            return $http.get(authenticationService.apiBaseUrl + '/api/user/details?userId=' + userId)
        }
        
        var service = {
            getUserDetailsById: getUserDetailsById
        };

        return service;
    }
})();