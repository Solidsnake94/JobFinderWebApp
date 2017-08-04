(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobDetailsController', seekJobDetailsController);

    seekJobDetailsController.inject = ['$scope', '$state','seekJobsService'];
    function seekJobDetailsController($scope, $state,  seekJobsService) {
        var vm = this;

        vm.job = seekJobsService.getSelectedSeekJob();

        
        // functions 
        vm.applyForJob = function(id){
            // CORRECT VERSION 
            // seekJobsService.getJobDetails(id).then(function(data){
            //     $scope.selectedSeekJob = data;
            // });

            seekJobsService.applyForJob(id);
            $state.go("dashboard.applied-jobs")
        }

        
        console.log('vm.job');
        console.log(vm.job);
    }
})();