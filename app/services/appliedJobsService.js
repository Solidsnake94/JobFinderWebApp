(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('appliedJobsService', appliedJobsService);

    appliedJobsService.inject = ['$http'];

    function appliedJobsService($http) {

        var jobs = [
            {
                id: 1,
                title: "Jobo Robo",
                status: "Pending"
            },
            {
                id: 1,
                title: "Jobobbla",
                status: "Approved"
            }, {
                id: 1,
                title: "Babysitting Pandas",
                status: "Pending"
            },
        ]


        function getAppliedJobs() {

            //     $http.get('/api/appliedJobs')
            //         .success(function (data) {
            //             return data;
            //         })
            //         .error(function (data) {
            //             console.log('Error: ' + data);
            //         });

            return jobs;
        }

        var service = {
            getAppliedJobs: getAppliedJobs
        };

        return service;
    }
})();