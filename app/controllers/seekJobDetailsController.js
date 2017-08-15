(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobDetailsController', seekJobDetailsController);

    seekJobDetailsController.inject = ['$scope', '$state', 'seekJobsService', "googleMapsService", '$stateParams'];
    function seekJobDetailsController($scope, $state, $stateParams, googleMapsService, seekJobsService) {
        var vm = this;
        var job = {};
        var jobApplication ={};

        $scope.place = {};

        vm.job = $stateParams.job;

        vm.jobApplication = {
            jobId : vm.job.id,
            applicantId : localStorage.getItem('ls.userId'),
            status:'PENDING'
        }

        console.log(vm.job);

        googleMapsService.initWithCoords(vm.job.latitude, vm.job.longitude);

        //============Apply for Job ==============

        vm.applyForJob = function () {
            seekJobsService.applyForJob(vm.jobApplication).then(function (response) {
                $state.go("dashboard.applied-jobs")
            }, function (error) {
                console.log("Something went wrong with the application");
            });
        }

    }
})();