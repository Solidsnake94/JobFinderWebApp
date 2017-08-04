(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('createdJobsController', createdJobsController);

    createdJobsController.inject = ['$scope', 'createdJobsService'];

    function createdJobsController($scope, createdJobsService) {
        var vm = this;
        vm.pendingJobs = [];
        vm.approvedJobs = [];

        var createdJobs = createdJobsService.getCreatedJobs(1);
        sortCreatedJobs(createdJobs);

        function sortCreatedJobs(jobs){
            jobs.forEach(function(job) {
                if(job.applicantsPending >= 0){
                    vm.pendingJobs.push(job);
                }
                if(job.applicantsApproved > 0){
                    vm.approvedJobs.push(job);
                }
            });
        }
    }
})();