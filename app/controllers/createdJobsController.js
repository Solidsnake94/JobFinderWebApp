(function () {
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

        createdJobsService.getPendingJobs(2,5,"DateStart",false).then(
            function (response) {
                console.log(response);
                vm.pendingJobs = response.data;
            },
            function(error){
                console.log("error getting pending jobs")
            }
        );
        
        function sortCreatedJobs(jobs) {
            jobs.forEach(function (job) {

                if (job.applicantsApproved > 0) {
                    vm.approvedJobs.push(job);
                }
            });
        }
    }
})();