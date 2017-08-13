(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('appliedJobsService', appliedJobsService);

    appliedJobsService.inject = ['$http', "authenticationService"];

    function appliedJobsService($http, authenticationService) {

        function getAppliedJobs(applicantId) {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/jobs/application/applicant?applicantId=' + applicantId)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }
        var goToDetailsAppliedjobs = function (id) {
            return new Promise(function (resolve, reject) {
                $http.get(authenticationService.apiBaseUrl + '/api/jobs/created?jobId=' + id)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (data) {
                        console.log('Error: ' + data);
                    });
            });
        }

        var service = {
            getAppliedJobs: getAppliedJobs,
            goToDetailsAppliedJobs: goToDetailsAppliedjobs
        };

        return service;
    }
})();