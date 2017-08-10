(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('seekJobsService', seekJobsService);

    seekJobsService.inject = ['$q', '$http', 'authenticationService'];
    function seekJobsService($q, $http, authenticationService) {

        var selectedSeekJob = {};

        // FAKE DATA ======================
        var jobs = [
            {
                id: 1,
                title: 'First job',
                company: 'Employer 1',
                category: 'Cleaning',
                date: new Date()
            },
            {
                id: 2,
                title: 'Second job',
                company: 'Employer 1',
                category: 'Cleaning',
                date: new Date()
            }, {
                id: 3,
                title: 'Third job',
                company: 'Employer 1',
                category: 'Jogging',
                date: new Date()
            }
        ]

        var job = {
            id: 3,
            title: 'Third job',
            description: 'This is the description, bla bla bla',
            company: 'Employer 1',
            category: 'Jogging',
            startDate: new Date(),
            endDate: new Date(),
            price: 23232,
            time: 44,
            coordinates: {
                latitude: '',
                longtitude: ''
            }
        }

        //====================================



        function getAllJobs() {
            return new Promise(function (resolve, reject) {

                $http.get(authenticationService.apiBaseUrl + '/api/jobs/pending')
                    .then(function (response) {
                        resolve(response.data);
                    },
                    function (response) {
                        console.log('Error: ' + response);
                    });

            });
        }

        function getJobDetails(id) {
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

        // ======= seekJobDetailsController methods ==========
        function applyForJob(id) {

                }

        function getSelectedSeekJob() {
                    return selectedSeekJob;
                }

        // ====== seekJobController methods ===========
        function setSelectedSeekJob(selectedJob) {
                    selectedSeekJob = selectedJob;
                }

        // function getAllJobs() {
        //     return jobs;
        // }

        // function getJobDetails(id) {
        //     return job;
        // }


        ////////////////

        var service = {
                getAllJobs: getAllJobs,
                getJobDetails: getJobDetails,
                setSelectedSeekJob: setSelectedSeekJob,
                getSelectedSeekJob: getSelectedSeekJob,
                applyForJob: applyForJob
            };

            return service;
        }
    })();