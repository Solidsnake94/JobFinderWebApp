(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('pendingJobsdetailsController', pendingJobsdetailsController);

    pendingJobsdetailsController.inject = ['$scope', '$state', '$stateParams', "googleMapsService",'createdJobsService'];
    function pendingJobsdetailsController($scope, $state, $stateParams, googleMapsService,createdJobsService) {
        var vm = this;
        var jobApplicationDetails = {};
        $scope.place = {};

        vm.jobApplicationDetails = $stateParams.jobApplicationDetails;

        vm.acceptJobApplicant = function (applicantId, jobId) {
            createdJobsService.acceptApplicantJob(applicantId, jobId).then(function () {
                $state.go("dashboard.approved", {}, { reload: true });
            }, function (error) {
                console.log('there was an error in accepting the job');
            })
        }
        console.log(vm.jobApplicationDetails);
    }
})();