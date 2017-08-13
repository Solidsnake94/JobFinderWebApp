(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('createdJobsService', createdJobsService);

    createdJobsService.inject = ['$http', 'authenticationService'];
    function createdJobsService($http, authenticationService) {

        var service = {};
        var jobs = [];

        //===============Pending Jobs ====================
        var getPendingJobs = function (userId, offset, limt, filter, orderBy) {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/jobs/pending/page?userId=' + userId + '&offset=' + offset + '&limit=' + limt + '&filter=' + filter + '&orderByAscen=' + orderBy)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }

        var goToDetailsPendingJobsApplication = function (id) {
            return new Promise(function (resolve, reject) {
                $http.get(authenticationService.apiBaseUrl + '/api/jobs/application/job?jobId=' + id)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (data) {
                        console.log('Error: ' + data);
                    });
            });
        }

        var deletePendingJobById = function (id) {
            return $http.delete(authenticationService.apiBaseUrl + "/api/jobs/created?jobId=" + id)
                .then(function (response) {
                    return response.data;
                })
        }

        //===============Approved Jobs ====================
        var getApprovedJobs = function (userId) {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/jobs/approved?userId=' + userId)
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }

        var goToDetailsApprovedjobs = function (id) {
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

        //===============Create Job ====================
        var createJob = function (job) {
            return $http.post(authenticationService.apiBaseUrl + "/api/jobs/created", job)
                .then(function (response) {
                    return response.data;
                })
        };

        var acceptApplicantJob = function (applicantId, jobId) {
            return $http.post(authenticationService.apiBaseUrl + "/api/jobs/application/accept?applicantId=" + applicantId + '&jobId=' + jobId)
                .then(function (response) {
                    return response.data;
                })
        }

        var service = {
            getPendingJobs: getPendingJobs,
            deletePendingJobById: deletePendingJobById,
            createjob: createJob,
            getApprovedJobs: getApprovedJobs,
            goToDetailsApprovedjobs: goToDetailsApprovedjobs,
            goToDetailsPendingJobsApplication: goToDetailsPendingJobsApplication,
            acceptApplicantJob: acceptApplicantJob
        };

        return service;
    }
})();