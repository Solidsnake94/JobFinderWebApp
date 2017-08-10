(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobsController', seekJobsController);

    seekJobsController.inject = ['$scope', '$state', "seekJobsService"];

    function seekJobsController($scope, $state, seekJobsService) {
        var vm = this;

        vm.selectedSeekJob = {};
        vm.allJobs = [];
        vm.job = {};

        seekJobsService.getAllJobs().then(
            function (data) {
                vm.allJobs = data;
                vm.allJobsLength = vm.allJobs.length;
                vm.allJobsCurrentPage = 1;
                vm.maxSizeOfJobsOnPage = 5;
            },
            function (error) {
                console.log("error getting all jobs");
            }
        );


        // ==============================================


        // ====== CLICK FUNCTIONS =============================
        vm.goToDetails = function (id) {
            seekJobsService.getJobDetails(id).then(function (response) {
                vm.job = response;
                $state.go("dashboard.job-details", { job: vm.job }, { reload: true });
            }, function (error) {
                console.log("error getting jobs details");
            });
        }
        console.log(vm.job);


        //=======================================================

    }
})();