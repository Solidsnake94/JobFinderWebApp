(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('createdJobsService', createdJobsService);

    createdJobsService.inject = ['$http', 'authenticationService'];
    function createdJobsService($http, authenticationService) {

        var service = {};
        var jobs = [
            {
                jobId: 1,
                title: "fighting tigers",
                applicantsPending: 4,
                applicantsApproved: 2
            },
            {
                jobId: 2,
                title: "sexting old people",
                applicantsPending: 0,
                applicantsApproved: 3
            },
            {
                jobId: 3,
                title: "eating divan",
                applicantsPending: 4,
                applicantsApproved: 2
            },
            {
                jobId: 4,
                title: "spinining fidget spinner",
                applicantsPending: 6,
                applicantsApproved: 1
            },
            {
                jobId: 5,
                title: "fighting your mom",
                applicantsPending: 3,
                applicantsApproved: 2
            }
        ]

        function getCreatedJobs(userId) {
            return jobs
        }

        var createJob = function (job) {
            return $http.post(authenticationService.apiBaseUrl + "/api/jobs/created", job)
                .then(function (response) {
                    return response.data;
                })
        };

        var service = {
            getCreatedJobs: getCreatedJobs,
            createjob: createJob
        };

        return service;
    }
})();