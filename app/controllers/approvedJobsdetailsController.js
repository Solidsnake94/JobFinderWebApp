(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('approvedJobsdetailsController', approvedJobsdetailsController);

    approvedJobsdetailsController.inject = ['$scope', '$state', '$stateParams', "googleMapsService"];
    function approvedJobsdetailsController($scope, $state, $stateParams, googleMapsService) {
        var vm = this;
        var job = {};
        $scope.place = {};

        vm.job = $stateParams.job;

        console.log(vm.job);
    }
})();