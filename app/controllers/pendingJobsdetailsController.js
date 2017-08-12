(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('pendingJobsdetailsController', pendingJobsdetailsController);

    pendingJobsdetailsController.inject = ['$scope', '$state', '$stateParams', "googleMapsService"];
    function pendingJobsdetailsController($scope, $state, $stateParams, googleMapsService) {
        var vm = this;
        var job = {};
        $scope.place = {};

        vm.job = $stateParams.job;

        console.log(vm.job);
    }
})();