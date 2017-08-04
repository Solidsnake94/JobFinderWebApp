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

        seekJobsService.getAllJobs().$promise.then(
            function (data) {

            vm.allJobs = data;
            vm.allJobsLength = vm.allJobs.length;
            vm.allJobsCurrentPage = 1;
            vm.maxSizeOfJobsOnPage = 5;

            console.log("vm.allJobs");
            console.log(vm.allJobs);
        },
        function(error){
            console.log("error getting all jobs");
        }
    );


        // ==============================================


        // ====== CLICK FUNCTIONS =============================
        vm.getJobDetails = function (id) {
            // CORRECT VERSION 
            // seekJobsService.getJobDetails(id).then(function(data){
            //     $scope.selectedSeekJob = data;
            // });

            // TEST VERSION
            vm.selectedSeekJob = seekJobsService.getJobDetails(id);
            seekJobsService.setSelectedSeekJob(vm.selectedSeekJob);
            if (vm.selectedSeekJob) {
                $state.go('dashboard.job-details');
            }
        }
        //=======================================================


    }
})();