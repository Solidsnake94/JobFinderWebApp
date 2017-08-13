(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('appliedJobsDetailsController', appliedJobsDetailsController);

    appliedJobsDetailsController.inject = ['$scope', '$state', '$stateParams', "googleMapsService"];
    function appliedJobsDetailsController($scope, $state, $stateParams, googleMapsService) {
        var vm = this;
        var job = {};
        $scope.place = {};

        vm.job = $stateParams.job;

        console.log(vm.job);
    }
})();