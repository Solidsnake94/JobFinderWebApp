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

        var getPendingJobs = function (offset, limt, filter, orderBy) {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/jobs/pending/page?offset=' + offset + '&limit=' + limt + '&filter=' + filter + '&orderByAscen=' + orderBy)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }

        function getCreatedJobs(userId) {
            return jobs
        }
        var getApprovedJobs = function () {
            return 1;
        }

        var createJob = function (job) {
            return $http.post(authenticationService.apiBaseUrl + "/api/jobs/created", job)
                .then(function (response) {
                    return response.data;
                })
        };

        var service = {
            getPendingJobs: getPendingJobs,
            getCreatedJobs: getCreatedJobs,
            createjob: createJob,
            getApprovedJobs: getApprovedJobs
        };

        return service;
    }
})();