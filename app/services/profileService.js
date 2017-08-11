(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('profileService', profileService);

    profileService.inject = ['$http', 'authenticationService'];
    function profileService($http, authenticationService) {

        var service = {};      

        var getUserDetailsById = function (userId) {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/user/details?userId='+userId)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }
        var service = {
           getUserDetailsById : getUserDetailsById
        };

        return service;
    }
})();