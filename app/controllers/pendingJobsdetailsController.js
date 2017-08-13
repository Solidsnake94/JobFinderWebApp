(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('pendingJobsdetailsController', pendingJobsdetailsController);

    pendingJobsdetailsController.inject = ['$scope', '$state', '$stateParams', "googleMapsService"];
    function pendingJobsdetailsController($scope, $state, $stateParams, googleMapsService) {
        var vm = this;
        var jobApplicationDetails = {};
        $scope.place = {};

        vm.jobApplicationDetails = $stateParams.jobApplicationDetails;

        console.log(vm.jobApplicationDetails);
    }
})();