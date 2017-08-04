(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('createdJobsService', createdJobsService);

    createdJobsService.inject = ['$http'];
    function createdJobsService($http) {

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

        var service = {
            getCreatedJobs: getCreatedJobs
        };

        return service;
    }
})();