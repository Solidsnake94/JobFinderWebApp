(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('appliedJobsController', appliedJobsController);

    appliedJobsController.inject = ['$scope', '$state', 'appliedJobsService'];

    function appliedJobsController($scope, $state, appliedJobsService) {
        var vm = this;

        var job = {};

        console.log(vm.job);
        vm.id = localStorage.getItem('ls.userId');

        appliedJobsService.getAppliedJobs(vm.id).then(function (response) {
            vm.appliedJobs = response.data;
            console.log(vm.appliedJobs);
        }, function (error) {
            console.log("Couldn't get the jobs");
        });


        vm.goToDetailsAppliedJobs = function (id) {
            appliedJobsService.goToDetailsAppliedJobs(id).then(function (response) {
                vm.job = response;
                $state.go("dashboard.applied-jobs-details", { job: vm.job }, { reload: true });
            }, function (error) {
                console.log("error getting jobs details");
            });
        }


    }
})();